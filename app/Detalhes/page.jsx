'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Detalhes = () => {

    //Estado API
    const [dados, setDados] = useState(null)
    const [cards, setCards] = useState(null)

    //Estado das propriedades
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [img, setImg] = useState('')
    const [typeDesc, setTypeDesc] = useState('')
    const [description, setDescription] = useState('')
    const [atk, setAtk] = useState('')
    const [def, setDef] = useState('')
    const [level, setLevel] = useState('')


    useEffect(() => {
        async function fetchCards() {
            try {
                const response = await axios.get('/api/cards');
                setDados(response.data.cards);
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
            <main>
                <h1>Teste</h1>
                {
                    dados ? (
                        <div>
                            {
                                cards.map((cards) => (
                                    <div key={cards.id}>
                                        <p>{cards.name}</p>
                                        <p>{cards.type}</p>
                                        <img src={cards.img} alt="imagem da api" />
                                        <p>{cards.typeDescription}</p>
                                        <p>{cards.description}</p>
                                        <p>{cards.atk}</p>
                                        <p>{cards.def}</p>
                                        <p>{cards.level}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p>Carregando API...</p>
                    )
                }
            </main>
            <Footer />
        </>
    )
}

export default Detalhes;