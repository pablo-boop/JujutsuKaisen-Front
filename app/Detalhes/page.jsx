'use client'

import styles from './detalhes.module.css'
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import { style } from 'motion';

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

    //Estado da Search Bar
    const[searchBar, setSearchBar] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/cards", { name, type, img, typeDesc, description, atk, def, level });
            setCards([...cards, response.data.cards]);
            setName('')
            setType('')
            setImg('')
            setTypeDesc('')
            setDescription('')
            setAtk('')
            setDef('')
            setLevel('')
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    //Effect API
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
            <main className={styles.main}>
                <div>
                    <section className={styles.register}>
                        <div className={styles.registerTitle}>
                            <h2 className={styles.title}>Registrar personagens</h2>
                        </div>
                        <input className={styles.input} type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nome' />
                        <select className={styles.select} name="type" id="type" onChange={e => setType(e.target.value)}>
                            <option className={styles.option} value="">Selecione o tipo da carta</option>
                            <option className={styles.option} value="personagem">Personagem</option>
                            <option className={styles.option} value="efeito">Efeito</option>
                        </select>
                        <input className={styles.input} type="text" value={img} onChange={e => setImg(e.target.value)} placeholder='Imagem' />
                        <input className={styles.input} type="text" value={typeDesc} onChange={e => setTypeDesc(e.target.value)} placeholder='TypeDescription' />
                        <input className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='descrição' />
                        <input className={styles.input} type="text" value={atk} onChange={e => setAtk(e.target.value)} placeholder='ataque' />
                        <input className={styles.input} type="text" value={def} onChange={e => setDef(e.target.value)} placeholder='defesa' />
                        <select className={styles.select} name="level" id="level" onChange={e => setLevel(e.target.value)}>
                            <option className={styles.option} value="">Selecione o nível da carta</option>
                            <option className={styles.option} value="especial">Especial</option>
                            <option className={styles.option} value="primeiro">Primeiro</option>
                            <option className={styles.option} value="segundo">Segundo</option>
                            <option className={styles.option} value="terceiro">Terceiro</option>
                            <option className={styles.option} value="quarto">Quarto</option>
                        </select>
                        <motion.button
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={styles.button}>Registrar</motion.button>
                    </section>
                </div>
                <div className={styles.cards}>
                    <div className={styles.filters}>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.btnFilter}>Feiticeiros</motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.btnFilter}>Maldições</motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.btnFilter}>Efeitos</motion.button>
                    </div>
                    <div className={styles.map}>
                        <div className={style.filterBar}>
                            <input type="text" className={styles.searchBar} placeholder='Pesquisar pelo nome' value={searchBar} onChange={e => setSearchBar(e.target.value)}/>
                        </div>
                        {
                            dados ? (
                                <div className={styles.mappedCards}>
                                    {
                                        cards.map((cards) => (
                                            <div key={cards.id}>
                                                <Cards name={cards.name} img={cards.img} description={cards.description} atk={cards.atk} def={cards.def} />
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p>Carregando API...</p>
                            )
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Detalhes;