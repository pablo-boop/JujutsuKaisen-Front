import styles from "./styles.module.css";

const Cards = ({name, img, description, atk, def, level}) => {
    return (
        <div className={styles.box}>
            <div className={styles.frontCard}>  {/*Frente da carta*/}
                <div className={styles.overlapGroup}>
                    <div className={styles.card} />
                    <img className={styles.background} alt="Background" src={img} />  {/*imagem de fundo da carta*/}
                    <img className={styles.img} alt="Img" src={img} />  {/*imagem principal da carta*/}
                    <div className={styles.infos} />  {/*informações*/}
                    <div className={styles.upInfo} />
                    <div className={styles.itadoriYuji}>{name}</div>  {/*nome do personagem*/}
                    <div className={styles.ASDASDA}>  {/*nível e descrição*/}
                        {level} 
                        <br />
                        {description}
                    </div>
                    <div className={styles.textWrapper}>{atk} / {def}</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;