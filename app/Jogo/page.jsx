"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./jogo.module.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';

function Jogo() {
    const [dados, setDados] = useState([]);
    const [player1Deck, setPlayer1Deck] = useState([]);
    const [player2Deck, setPlayer2Deck] = useState([]);
    const [selectedCard1, setSelectedCard1] = useState(null);
    const [selectedCard2, setSelectedCard2] = useState(null);
    const [player1Life, setPlayer1Life] = useState(5);
    const [player2Life, setPlayer2Life] = useState(5);

    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get('/api/cards');
                setDados(response.data.cards);
                const deck1 = generateDeck(response.data.cards);
                const deck2 = generateDeck(response.data.cards);
                setPlayer1Deck(deck1);
                setPlayer2Deck(deck2);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchCards();
    }, []);

    function generateDeck(cards) {
        let deck = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            deck.push(cards[randomIndex]);
        }
        return deck;
    }

    const selectCard = (id, player) => {
        const deck = player === 1 ? player1Deck : player2Deck;
        const card = deck.find(card => card.id === id);
        if (player === 1) {
            setSelectedCard1(card);
        } else {
            setSelectedCard2(card);
        }
    }

    const battle = () => {
        if (!selectedCard1 || !selectedCard2) {
            return;
        }
        if (selectedCard1.atk > selectedCard2.atk) {
            setPlayer2Life(player2Life - 1);
            setPlayer2Deck(player2Deck.filter(card => card.id !== selectedCard2.id));
        } else {
            setPlayer1Life(player1Life - 1);
            setPlayer1Deck(player1Deck.filter(card => card.id !== selectedCard1.id));
        }
        setSelectedCard1(null);
        setSelectedCard2(null);
    }

    useEffect(() => {
        if (player1Life === 0) {
            console.log("Player 2 won");
        } else if (player2Life === 0) {
            console.log("Player 1 won");
        }
    }, [player1Life, player2Life]);

    return (
        <main className={styles.main}>
            <section className={styles.battlefield}>
                <img className={styles.imgBattle} src={'../../background.png'} alt="background" />
                <img className={styles.purpleBg} src={'../../vazio1.png'} alt="effect purple" />
                <img className={styles.purple} src={'../../vazio1.png'} alt="effect purple" />
            </section>
            <section className={styles.table}>
                <div className={styles.deck2}>
                    {
                        player2Deck.map((card) => (
                            <div key={card.uuid}>
                                <Cards classEdit={styles.deck1} name={card.name} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.battleCenter}>
                    <div className={styles.card1}>

                    </div>
                    <div className={styles.actions}>
                        <button className={styles.battleBtn}>Batalhar</button>
                    </div>
                    <div className={styles.card2}>

                    </div>
                </div>
                <div className={styles.deck1}>
                    {
                        player1Deck.map((card) => (
                            <div key={card.uuid}>
                                <Cards classEdit={styles.deck1} name={card.name} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
        // <div className={styles.cards}>
        //     {
        //         player1Deck.map ((card) => (
        //             <Cards classEdit={styles.deck1} name={card.name} img={card.img} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def}/>
        //         ))
        //     }
        // </div>
    );
}

export default Jogo
