"use client"
import styles from './students.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useRouter } from 'next/navigation';
import Popup from '../components/PopUp/PopUp'

const Students = () => {

    //Estado API
    const [dados, setDados] = useState([])
    const [students, setStudents] = useState([])
    const router = useRouter();

    //Estado das propriedades
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

        //PopUp
        const [showPopUp, setShowPopUp] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(name == "" || age == "" || email == "" || description == "") {
            setShowPopUp(true)
        } else {
            try {
                const response = await axios.post("/api/students", { name, age, email, description });
                setStudents([...students, response.data.students]);
                clean()
            } catch (error) {
                console.error("Error submitting data:", error);
            }
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

    //Função PUT e DELETE
    const deletar = async (id) => {
        const url = `/api/students/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((card) => card.id !== id));
            setCards(cards.filter((card) => card.id !== id))
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const update = async (id) => {
        router.push(`/Students/${id}`);
    };

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
                    <button className={styles.button} type="submit" onClick={handleSubmit}>Registrar</button>
                </div>
                <div className={styles.map}>
                    {
                        dados !== null ? (
                            students.map((student) => (
                                <div key={student.id} className={styles.cards}>
                                    <label className={styles.label}>
                                        <p className={styles.p}>Nome:</p>
                                        <p><strong>{student.name}</strong></p>
                                    </label>
                                    <label className={styles.label}>
                                        <p className={styles.p}>Idade:</p>
                                        <p><strong>{student.age}</strong></p>
                                    </label>
                                    <label className={styles.label}>
                                        <p className={styles.p}>Email:</p>
                                        <p><strong>{student.email}</strong></p>
                                    </label>
                                    <label className={styles.label}>
                                        <p className={styles.p}>Descrição:</p>
                                        <p><strong>{student.description}</strong></p>
                                    </label>
                                    <div className={styles.actions}>
                                        <button className={styles.btnActions} onClick={() => update(student.id)}>Editar</button>
                                        <button className={styles.btnActions} onClick={() => deletar(student.id)}>Deletar</button>
                                    </div>
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