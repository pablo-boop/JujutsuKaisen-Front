"use client"
import styles from './students.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";

const Students = () => {

    //Estado API
    const [dados, setDados] = useState([])
    const [students, setStudents] = useState([])

    //Estado das propriedades
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/students", { name, age, email, description });
            setStudents([...students, response.data.students]);
            setName('')
            setAge('')
            setEmail('')
            setDescription('')
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    //Effect API
    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get('/api/students');
                setDados(response.data);
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchStudents();
    }, [students]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                
                <div className={styles.card}>
                <section>
                <h1 className={styles.h1}>STUDENTS</h1>
                </section>
                <section>
                <form onSubmit={handleSubmit}>
                    <section className={styles.sec}>
                    <input
                    className={styles.inp}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    className={styles.inp}
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    /></section>
                    <section className={styles.sec}>
                    <input
                    className={styles.inp}
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    className={styles.inp}
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /></section>
                    <button className={styles.butt} type="submit">CRIAR</button>
                </form></section>
                <div className={styles.left}>
                    {
                        dados ? (
                            <div className={styles.map}>
                                {
                                    dados.map((student) => (
                                        <div key={student.id}>
                                            <p>{student.name}</p>
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

export default Students