import styles from "./contato.module.css"
const contato = ()=> {
    return(
        <div className={styles.geral}>
            <div className={styles.card}>
                <input placeholder="Nome" type="text" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Comentario" />
            </div>
        </div>
    )
}
export default contato