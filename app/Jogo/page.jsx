"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./jogo.module.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import { useRouter } from 'next/navigation';

function Jogo() {
    //API
    const [dados, setDados] = useState([]);
    const route = useRouter();

    //Decks and Players
    const [player1Deck, setPlayer1Deck] = useState([]);
    const [player2Deck, setPlayer2Deck] = useState([]);
    const [selectedCard1, setSelectedCard1] = useState(null);
    const [selectedCard2, setSelectedCard2] = useState(null);
    const [player1Life, setPlayer1Life] = useState(5);
    const [player2Life, setPlayer2Life] = useState(5);

    //HandleEvents
    const [draggedCard, setDraggedCard] = useState(null);

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
        const deck = player == 1 ? player1Deck : player2Deck;
        const card = deck.find(card => card.uuid === id);
        if (player == 1) {
            setSelectedCard1(card);
        } else {
            setSelectedCard2(card);
        }

        console.log(selectedCard1, selectedCard2);
    }

    const battle = () => {
        if (!selectedCard1 || !selectedCard2) {
            return;
        }
        if (selectedCard1.atk > selectedCard2.atk) {
            setPlayer2Life(player2Life - 1);
            setPlayer2Deck(player2Deck.filter(card => card.id !== selectedCard2.uuid));
        } else {
            setPlayer1Life(player1Life - 1);
            setPlayer1Deck(player1Deck.filter(card => card.id !== selectedCard1.uuid));
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
                            <div
                                key={card.uuid}
                                className={styles.cardChoose}
                                onClick={() => selectCard(card.uuid, 2)}
                            >
                                <Cards classEdit={styles.deck1} name={card.name} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.battleCenter}>
                    <div className={styles.card1}>
                        {selectedCard1 && (
                            <Cards
                                classEdit={styles.deck1}
                                name={selectedCard1.name}
                                typeDesc={selectedCard1.typeDescription}
                                description={selectedCard1.description}
                                atk={selectedCard1.atk}
                                def={selectedCard1.def}
                            />
                        )}
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.battleBtn} onClick={() => battle}>Batalhar</button>
                        <button className={styles.battleBtn} onClick={() => route.push('/')}>Voltar</button>
                    </div>
                    <div className={styles.card2}>
                        {selectedCard2 && (
                            <Cards
                                classEdit={styles.deck1}
                                name={selectedCard2.name}
                                typeDesc={selectedCard2.typeDescription}
                                description={selectedCard2.description}
                                atk={selectedCard2.atk}
                                def={selectedCard2.def}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.deck1}>
                    {
                        player1Deck.map((card) => (
                            <div
                                key={card.uuid}
                                onClick={() => selectCard(card.uuid, 1)}
                            >
                                <Cards name={card.name} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default Jogo
