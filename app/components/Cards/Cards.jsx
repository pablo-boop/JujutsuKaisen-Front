import styles from "./styles.module.css";

const Cards = ({ name, img, typeDesc, description, atk, def }) => {
    return (
        <div className={styles.geral} >
            <div className={styles.frontCard}>  {/*Frente da carta*/}
                <div className={styles.overlapGroup}>
                    <div className={styles.card} />{/*carta*/}
                    <img className={styles.bg} alt="Background" src={img} />  {/*imagem de fundo da carta*/}
                    <img className={styles.bgImg} alt="Img" src={img} />  {/*imagem principal da carta*/}
                    <div/>  {/*informações*/}
                    <div className={styles.upInfo} />
                    <div className={styles.up}><h3 className={styles.nameTitle}>{name}</h3></div>  {/*nome do personagem*/}
                    <div className={styles.infos}>  {/*nível e descrição do personagem*/}
                        <p className={styles.titleDesc}>{typeDesc} :</p>
                        <br />
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.textWrapper}><h3 className={styles.properties}>{atk} / {def}</h3></div>
                </div>
            </div>
        </div>
    );
};

export default Cards;