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
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        async function fetchStudents() {
            const response = await axios.get(
                `/api/students/${id}`
            );
            setDados(response.data.student);
            setCards(response.data.student);
            setName(response.data.student.name)
            setAge(response.data.student.age)
            setEmail(response.data.student.email)
            setDescription(response.data.student.description)
        }

        fetchStudents();
    }, []);

    const atualizarStudent = (e) => {
        e.preventDefault();
        axios
            .put(`/api/students/${id}`, {
                name: name,
                age: age,
                email: email,
                description: description,

            })
            .then((response) => {
                router.push('/Students');
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
                            <div key={dados.id}>
                                <form onSubmit={atualizarStudent}>
                                    <div className={styles.register}>
                                        <section className={styles.registerTitle}>
                                            <h1 className={styles.title }>STUDENTS</h1>
                                        </section>
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Age"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <button className={styles.button} type="submit">Atualizar</button>
                                    </div>
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