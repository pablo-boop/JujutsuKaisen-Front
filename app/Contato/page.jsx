import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import styles from "./contato.module.css"
const contato = () => {
    return (
        <>
            <Header />
            <div className={styles.geral}>
                <img src="https://i.pinimg.com/originals/7f/a2/43/7fa243b1a78cc227e3fed2d878cfecc8.gif" alt="mimi" className={styles.gif} />
                <div className={styles.card}>
                    <h1 className={styles.h1}>CONTATO</h1>
                    <hr className={styles.hrr} />
                    <div className={styles.gi}>
                        <section>

                        </section>
                        <section className={styles.sec}>
                            <input placeholder="Nome" type="text" className={styles.inputs} />
                            <input type="text" placeholder="E-mail" className={styles.inputs} />
                            <input type="text" placeholder="Comentario" className={styles.coment} />
                            <button className={styles.button}>Enviar</button>
                        </section>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default contato