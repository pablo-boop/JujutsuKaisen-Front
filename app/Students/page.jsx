import styles from './students.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";

const Students = () => {

    //Estado API
    const [dados, setDados] = useState(null)
    const [students, setStudents] = useState(null)

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
                setDados(response.data.students);
                setStudents(response.data.students);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchStudents();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Students</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {
                        dados ? (
                            <div className={styles.map}>
                                {
                                    dados.map((student) => (
                                        <Cards key={student.id} name={student.name} description={student.description} />
                                    ))
                                }
                            </div>
                        ) : (
                            <p>Carregando API...</p>
                        )
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Students