"use client";
import axios from 'axios'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Cards from './components/Cards/Cards';
import { useScroll } from 'framer-motion';
import Parallax from './components/Parallax/Parallax';

export default function Home() {
  //API
  const [cards, setCards] = useState([])

  //Framer Motion
  const { scrollYProgress } = useScroll();


  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCards();
  }, []);

  return (
    <main className={styles.main}>
      <Parallax />
    {/*explicação do anime*/}

    {/*explicação do jogo*/}
      <div className={styles.content_container}>
        <h1>Explicação do jogo</h1>
        {/*texto explicando o TCG*/}
        <div id={styles.TCG}>
          <h2>Explicação do TCG:</h2>
          <p>Um sistema de cartas com dois tipos principais sendo as cartas de personagem e as cartas de efeito.
           No começo de cada jogo é sorteado 5 cartas de personagens e 2 cartas de efeito, o objetivo é
            conseguir derrotar os 5 personagens do adversário para ganhar a partida.
          </p>
        </div>
        {/*texto explicando frases tecnicas*/}
        <div id={styles.termos}>
          <h2>Frases Técnicas:</h2>
            <p>-MP ( Média por personagem ), é a soma do ataque e a defesa do personagem;</p>
            <p> -NP ( Nível de personagem ): Todo personagem possui um ranking que define sua raridade e o seu
               nível de força, começando pelo nível 4 até o 1 e também o nível especial;
            </p>
        </div>
      </div>
    </main>
  )
}
