"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import styles from './id.module.css'
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

export default function UpdateStudent({ params }) {
    //params
    const { id } = params;

    //dados e router
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

    useEffect(() => {
        async function fetchCards() {
            const response = await axios.get(
                `/api/cards/${id}`
            );
            setDados(response.data.card);
            setCards(response.data.card);
            setName(response.data.card.name);
            setType(response.data.card.type);
            setImg(response.data.card.img);
            setTypeDesc(response.data.card.typeDescription);
            setDescription(response.data.card.description);
            setAtk(response.data.card.atk);
            setDef(response.data.card.def);
            setLevel(response.data.card.level);
        }

        fetchCards();
    }, []);

    console.log(dados);

    const atualizarCard = () => {
        axios
            .put(`/api/cards/${id}`, {
                name: name,
                type: type,
                img: img,
                typeDesc: typeDesc,
                description: description,
                atk: atk,
                def: def,
                level: level

            })
            .then((response) => {
                router.push('/Detalhes');
            });
    };

    return (
        <>
        <Header />
        <div className={styles.main}>
            <h1 className={styles.titleMain}>Atualizar</h1>
            <div>
                {
                    dados ? (
                        <div key={dados.uuid}>
                            <form onSubmit={atualizarCard}>
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
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={styles.button}>Registrar</motion.button>
                                </section>
                            </form>
                        </div>
                    ) : (
                        <p>Carregando API...</p>
                    )
                }
            </div>
        </div>
        <Footer />
        </>
    )
}