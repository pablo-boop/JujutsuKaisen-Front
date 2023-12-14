'use client'

//Imports from style and components
import styles from './cards.module.css'
import { motion } from 'framer-motion';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import { useRouter } from 'next/navigation';
//Hook imports
import { useState, useEffect } from "react";
import axios from "axios";
import { getFormLabelUtilityClasses } from '@mui/material';
import Popup from '../components/PopUp/PopUp'

const Detalhes = () => {

    //Estado API e rotas
    const [dados, setDados] = useState(null)
    const [cards, setCards] = useState(null)
    const router = useRouter();

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
    const [searchAtk, setSearchAtk] = useState('')
    const [searchDef, setSearchDef] = useState('')

    //PopUp
    const [showPopUp, setShowPopUp] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name == "" || type == "" || img == "" || typeDesc == "" || description == "" || atk == "" || def == "" || level == "") {
            setShowPopUp(true)
        }

        try {
            const response = await axios.post("/api/cards", { name, type, img, typeDesc, description, atk, def, level });
            setCards([...cards, response.data.cards]);
            clean()
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    //Effect API
    useEffect(() => {
        async function fetchCards() {
            try {
                let queryParams = '';
                if (searchAtk) {
                    queryParams += `atk=${searchAtk}&`
                }
                if (searchDef) {
                    queryParams += `def=${searchDef}&`
                }

                if (queryParams.length > 0) {
                    queryParams = queryParams.slice(0, -1)
                }
                const response = await axios.get(`/api/cards?${queryParams}`);
                setDados(response.data);
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchCards();
    }, [searchAtk, searchDef, dados]);

    //Função PUT e DELETE
    const deletar = async (id) => {
        const url = `/api/cards/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((card) => card.id !== id));
            setCards(cards.filter((card) => card.id !== id))
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const update = async (id) => {
        router.push(`/Cards/${id}`);
    };

    //Função de limpar os campos dos inputs
    const clean = () => {
        setName('')
        setType('')
        setImg('')
        setTypeDesc('')
        setDescription('')
        setAtk('')
        setDef('')
        setLevel('')
    }

    const close = () => {
        setShowPopUp(false)
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                {
                    showPopUp && (
                        <Popup text={'Preencha todos os campos!'} imageUrl={'https://www.icegif.com/wp-content/uploads/2022/02/icegif-752.gif'} onClose={close} showPopup={showPopUp} />
                    )
                }
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
                <div className={styles.map}>
                    <div className={styles.filterBar}>
                        <input type="text" className={styles.searchBar} placeholder='Pesquisar pelo Ataque' value={searchAtk} onChange={e => setSearchAtk(e.target.value)} />
                        <input type="text" className={styles.searchBar} placeholder='Pesquisar pela Defesa' value={searchDef} onChange={e => setSearchDef(e.target.value)} />
                    </div>
                    <div className={styles.dados}>
                        {dados !== null ? (
                            <div className={styles.mappedCards}>
                                {cards.map((card) => (
                                    <motion.div
                                        key={card.uuid}
                                        animate={{ y: 25 }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                        className={styles.cardMap}
                                    >
                                        <Cards className={styles.all} name={card.name} img={card.img} typeDesc={card.typeDescription} description={card.description} atk={card.atk} def={card.def} level={card.level} />
                                        <div className={styles.actions}>
                                            <motion.button onClick={() => update(card.uuid)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.btnActions}>Editar</motion.button>
                                            <motion.button onClick={() => deletar(card.uuid)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.btnActions}>Excluir</motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <img className={styles.img} src="/gozo-unscreen.gif" alt="Loading" />
                        )}
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </>
    )
}

export default Detalhes;