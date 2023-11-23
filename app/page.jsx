"use client";
import axios from 'axios'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards';

export default function Home() {
  const [cards, setCards] = useState([])

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
      <h1>Lista de cartas</h1>
      <div>
        {
          cards ? (
            <div>
              {
                cards.map((card) => (
                  <div key={card.id}>
                    <Cards name={card.name} img={card.img} description={card.description} atk={card.atk} def={card.def} level={card.level}/>
                  </div>
                ))
              }
            </div>
          ) : (
            <div>
              <p>Carregando...</p>
            </div>
          )
        }
      </div>
    </>
  )
}
