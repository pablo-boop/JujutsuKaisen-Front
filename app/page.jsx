"use client";
import axios from 'axios'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Cards from './components/Cards/Cards';
import { useScroll } from 'framer-motion';
import Parallax from './components/Parallax/Parallax';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentSection from './components/ContentSection/ContentSection';

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
    <>
       <Header />
      <main className={styles.main}>
        <Parallax />
        <div className={styles.content_container}>
          <ContentSection title="Explicação do TCG" text="Um sistema de cartas com dois tipos principais sendo as cartas de personagem e as cartas de efeito. No começo de cada jogo é sorteado 5 cartas de personagens e 2 cartas de efeito, o objetivo é conseguir derrotar os 5 personagens do adversário para ganhar a partida." />
          <ContentSection title="Frases Técnicas" text="-MP ( Média por personagem ), é a soma do ataque e a defesa do personagem; -NP ( Nível de personagem ): Todo personagem possui um ranking que define sua raridade e o seu nível de força, começando pelo nível 4 até o 1 e também o nível especial;" />
          <ContentSection title="Mecânicas e regras" text="No começo de todo o jogo é somado o ataque e a defesa de todos personagens, se o valor da soma de todos os personagens for maior que uma média específica a mão é rerolada para balancear as duas mãos; Quando a batalha começar será selecionado um personagem de cada lado, a ganhador será definido pelo maior MP ( Média por personagem ); Dedo do Sukuna: Se em uma partida começar e em sua mão tiver o personagem Itadori e a carta de efeito do “Dedo do Sukuna”, o dedo sumirá e será sumonado na sua mão a carta do Sukuna; Expansão de domínio: Uma carta de efeito que possui a funcionalidade de aumentar um NP do personagem escolhido aumentando o ataque e a defesa do personagem;" />
        </div>
      </main>
      <Footer />
    </>
  )
}