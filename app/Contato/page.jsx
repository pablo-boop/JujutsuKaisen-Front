"use client"
import styles from "./contato.module.css"
import { motion } from 'framer-motion';
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const contato = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const verifyInputs = () => {
        if (!name || !email || !comment) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        if (verifyInputs()) {
            // Se todos os campos estiverem preenchidos, faça algo aqui
            alert("Parabéns, você nos contatou!");
                // Limpar os inputs
                setName("");
                setEmail("");
                setComment("");
        }
    }

    return (
        <>
        <Header /> 
        <div className={styles.geral}>
            <motion.img
                src="https://i.pinimg.com/originals/7f/a2/43/7fa243b1a78cc227e3fed2d878cfecc8.gif"
                alt="mimi"
                className={styles.gif}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            />
            <div className={styles.card}>
                <section className={styles.dis}>
                    <h1 className={styles.h1}>CONTATO</h1>
                </section>
                <div className={styles.gi}>
                    <section>
                    </section>
                    <section className={styles.sec}>
                        <input placeholder="Nome" value={name} required onChange={(e) => setName(e.target.value)} type="text" className={styles.inputs} />
                        <input type="email" placeholder="E-mail" required className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Comentario" required className={styles.coment} value={comment} onChange={(e) => setComment(e.target.value)} />
                        <motion.button
                         onClick={handleSubmit}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                         className={styles.modalBtn}>Contatar</motion.button>
                    </section>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default contato