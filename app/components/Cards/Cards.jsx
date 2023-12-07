import styles from "./styles.module.css";

const Cards = ({ name, img, typeDesc, description, atk, def, level, classEdit }) => {
    return (
        <div className={classEdit}>
            <div className={styles.geral}>
                <div className={styles.up}>
                    {name}
                </div>
                <div className={styles.bg}>
                    <img className={styles.bgImg} src={img} alt="background image" />
                    <img className={styles.img} src={img} alt="imagem personagem" />
                </div>
                <div className={styles.infos}>
                    <label>
                        <h2 className={styles.titleDesc}>{typeDesc}</h2>
                        <p className={styles.description}>{description}</p>
                    </label>
                </div>
                <div className={styles.properties}>
                    <h3 className={styles.atkDef}>{atk} / {def}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cards;