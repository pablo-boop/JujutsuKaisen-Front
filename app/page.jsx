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
    </main>
  )
}
