"use client"
import styles from './students.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
            clean()
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    
    //Effect API
    useEffect(() => {
        async function fetchStudents() {
            try {
                const response = await axios.get('/api/students');
                setDados(response.data.students);
                setStudents(response.data.students);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchStudents();
    }, [students]);

    const clean = () => {
        setName('')
        setAge('')
        setEmail('')
        setDescription('')
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.register}>
                <section className={styles.registerTitle}>
                <h1 className={styles.title}>STUDENTS</h1>
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
                    <button className={styles.button} type="submit" onClick={handleSubmit}>CRIAR</button>
                </div>
                <div className={styles.map}>
                    {
                        dados ? (
                            students.map((student) => (
                                <div key={student.id} className={styles.cards}>
                                    <p>{student.name}</p>
                                    <p>{student.age}</p>
                                    <p>{student.email}</p>
                                    <p>{student.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>Careegando API...</p>
                        )
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Students