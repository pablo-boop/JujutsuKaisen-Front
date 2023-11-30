"use client"
import styles from "./contato.module.css"
import ModalPopUp from "../components/Modal/Modal"

const contato = ()=> {
    return(
        <div className={styles.geral}>
            <img src="https://i.pinimg.com/originals/7f/a2/43/7fa243b1a78cc227e3fed2d878cfecc8.gif" alt="mimi" className={styles.gif} />
            <div className={styles.card}>
                <h1 className={styles.h1}>CONTATO</h1>
                <hr className={styles.hrr} />
                <div className={styles.gi}>
                    <section>
                </section>
                <section className={styles.sec}>
                <input placeholder="Nome" type="text" className={styles.inputs}  />
                <input type="text" placeholder="E-mail" className={styles.inputs} />
                <input type="text" placeholder="Comentario" className={styles.coment} />
                <ModalPopUp   buttonTitle={"Contatar"} modalTitle={"Você nos contatou, parabéns!"} modalContent={"Não vou ver."} modalImg={"https://i.pinimg.com/originals/68/f1/42/68f142cc473e62240c593f7290d263ab.gif"} style={styles.modalBtn} />
                </section>
                </div>
                
            </div>
        </div>
    )
}
export default contato