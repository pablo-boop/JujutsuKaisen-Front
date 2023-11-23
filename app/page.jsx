"use client";
import axios from 'axios'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

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
                    <p>{card.name}</p>
                    <p>{card.img}</p>
                    <p>{card.description}</p>
                    <p>{card.atk}</p>
                    <p>{card.def}</p>
                    <p>{card.level}</p>
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
