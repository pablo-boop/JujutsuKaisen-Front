"use client"
import styles from "./contato.module.css"
import ModalPopUp from "../components/Modal/Modal"
import { motion } from 'framer-motion';
import { useState } from "react";

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
        }
    }

    return (
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
                        <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} type="text" className={styles.inputs} />
                        <input type="text" placeholder="E-mail" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Comentario" className={styles.coment} value={comment} onChange={(e) => setComment(e.target.value)} />
                        <ModalPopUp buttonTitle={"CONTATAR"} modalTitle={"Você nos contatou, parabéns!"} modalContent={"Não vou ver."} modalImg={"https://i.pinimg.com/originals/68/f1/42/68f142cc473e62240c593f7290d263ab.gif"} style={styles.modalBtn} />
                    </section>
                </div>
            </div>
        </div>
    )
}
export default contato