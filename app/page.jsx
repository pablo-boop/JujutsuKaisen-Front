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
        {/*texto explicando as regras*/}
        <div id={styles.regras}>
          <h2>Mecânicas e regras:</h2>
          <p>
            No começo de todo o jogo é somado o ataque e a defesa de todos personagens, se o valor da soma de
             todos os personagens for maior que uma média específica a mão é rerolada para balancear as duas
              mãos;
          </p>
          <p>
            Quando a batalha começar será selecionado um personagem de cada lado, a ganhador será definido pelo
             maior MP ( Média por personagem );
          </p>
          <p>
          Dedo do Sukuna: Se em uma partida começar e em sua mão tiver o personagem Itadori e a carta de efeito
           do “Dedo do Sukuna”, o dedo sumirá e será sumonado na sua mão a carta do Sukuna;
          </p>
          <p>
          Expansão de domínio: Uma carta de efeito que possui a funcionalidade de aumentar um NP do personagem
           escolhido aumentando o ataque e a defesa do personagem;
          </p>
        </div>
      </div>
    </main>
  )
}
