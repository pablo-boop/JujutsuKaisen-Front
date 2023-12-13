"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./jogo.module.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import { useRouter } from 'next/navigation';
import Popup from '../components/PopUp/PopUp';

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

    //Card media points
    const [mp1, setMp1] = useState(0)
    const [mp2, setMp2] = useState(0)

    //PopUp Handle
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
    };


        const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade da div
      
        // Função para fechar a div (altera o estado para tornar a div invisível)
        const fecharDiv = () => {
          setIsVisible(false);
        };


    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get('/api/cards');
                setDados(response.data);
                const deck1 = generateDeck(response.data);
                const deck2 = generateDeck(response.data.filter(card => !deck1.includes(card)));
                setPlayer1Deck(deck1);
                setPlayer2Deck(deck2);
                balance()
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCards();
    }, []);

    console.log(dados);

    function generateDeck(cards) {
        let deck = [];
        let usedCards = new Set();

        while (deck.length < 5) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            const selectedCard = cards[randomIndex];

            if (!usedCards.has(selectedCard.uuid)) {
                deck.push(selectedCard);
                usedCards.add(selectedCard.uuid);
            }
        }

        return deck;
    }

    const recreateDecks = () => {
        const newPlayer1Deck = generateDeck(dados);
        const newPlayer2Deck = generateDeck(dados.filter(card => !newPlayer1Deck.includes(card)));
        setPlayer1Deck(newPlayer1Deck);
        setPlayer2Deck(newPlayer2Deck);
    }
    
    const balance = () => {
        player1Deck.forEach((card) => {
            if (card.atk + card.def > 1000) {
                recreateDecks();
            }
        });
        player2Deck.forEach((card) => {
            if (card.atk + card.def > 1000) {
                recreateDecks();
            }
        });
    }

    const selectCard = (id, player) => {
        const deck = player == 1 ? player1Deck : player2Deck;
        const card = deck.find(card => card.uuid === id);
        if (player == 1) {
            setSelectedCard1(card);
            setMp1(card.atk + card.def)
        } else {
            setSelectedCard2(card);
            setMp2(card.atk + card.def)
        }
    }

    const battle = () => {
        if (!selectedCard1 || !selectedCard2) {
            return;
        }
        if (mp1 > mp2) {
            setPlayer2Life(player2Life - 1);
            setPlayer2Deck(player2Deck.filter(card => card.uuid !== selectedCard2.uuid));
        } else {
            setPlayer1Life(player1Life - 1);
            setPlayer1Deck(player1Deck.filter(card => card.uuid !== selectedCard1.uuid));
        }
        setSelectedCard1(null);
        setSelectedCard2(null);
    }

    const resp = () => {
        const [setShowPopup] = useState(false);

        const div = () => {
          setShowPopup(true);
      
        };
      
        const closePopup = () => {
          setShowPopup(false);
      
        };
    }

    useEffect(() => {
        if (player1Life === 0 || player2Life === 0) {
            setShowPopup(true);
        }
    }, [player1Life, player2Life]);

    return (
        <main className={styles.main}>
            <div className={styles.popUp}>
                {
                    showPopup && (
                        <Popup
                        showPopup={showPopup}
                        imageUrl="https://media1.tenor.com/m/KBnATdctL1MAAAAC/jujutsu-kaisen-jujutsu-kaisen-dance.gif"
                        text={player1Life === 0 ? "Player 2 Ganhou!" : "Player 1 Ganhou!"}
                        onClose={closePopup}
                    />
                    )
                }
            </div>
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
                                <Cards name={card.name} img={card.img} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.battleCenter}>
                    <div className={styles.card1}>
                        <div className={styles.heart1}>
                            {Array.from({ length: player1Life }, (_, index) => (
                                <img key={index} src={'/heart.png'} alt={`Vida ${index + 1}`} className={styles.heart} />
                            ))}
                        </div>
                        <div className={styles.bgCard}>
                        {selectedCard1 && (
                            <Cards
                                classEdit={styles.deck1}
                                name={selectedCard1.name}
                                img={selectedCard1.img}
                                typeDesc={selectedCard1.typeDescription}
                                description={selectedCard1.description}
                                atk={selectedCard1.atk}
                                def={selectedCard1.def}
                            />
                        )}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.battleBtn} onClick={() => battle()}>Batalhar</button>
                        <button className={styles.battleBtn} onClick={() => route.push('/')}>Voltar</button>
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.heart2}>
                            {Array.from({ length: player2Life }, (_, index) => (
                                <img key={index} src={'/heart.png'} alt={`Vida ${index + 1}`} className={styles.heart} />
                            ))}
                        </div>
                        <div className={styles.bgCard}>
                        {selectedCard2 && (
                            <Cards
                                classEdit={styles.deck1}
                                name={selectedCard2.name}
                                img={selectedCard2.img}
                                typeDesc={selectedCard2.typeDescription}
                                description={selectedCard2.description}
                                atk={selectedCard2.atk}
                                def={selectedCard2.def}
                            />
                        )}
                        </div>
                    </div>
                </section>
                </div>
                <div className={styles.deck1}>
                    {
                        player1Deck.map((card) => (
                            <div
                                key={card.uuid}
                                onClick={() => selectCard(card.uuid, 1)}
                            >
                                <Cards name={card.name} img={card.img} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} />
                            </div>
                        ))
                    }
               <div>
                {isVisible && (
                    <section className={styles.hidden}>
                    <div className={styles.blue}>
                        <h4>Error Error</h4>   
                        <button className={styles.fecha} onClick={fecharDiv}><img src="./xizin.png" alt="xis" className={styles.xis}/></button>
                    </div>
                    <div className={styles.d}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/2219px-Warning.svg.png" alt="warning" className={styles.war} />
                    <h5 className={styles.h22}>Esta página é feita para computadores</h5>
                    </div>
                    <Link href={'/'}>
                    <div className={styles.butt}>
                    <button className={styles.idk} >Ok</button>
                    </div>
                    </Link>
                </section>
                )}
                </div>
            </main>
            <Footer className={styles.foot} />
        </div>
    );
}

export default Jogo
