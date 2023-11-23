import styles from "./styles.module.css";

const Cards = ({name, img, description, atk, def, level}) => {
    return (
        <div className={styles.box}>
            <div className={styles.frontCard}>
                <div className={styles.overlapGroup}>
                    <div className={styles.card} />
                    <img className={styles.background} alt="Background" src={img} />
                    <img className={styles.img} alt="Img" src={img} />
                    <div className={styles.infos} />
                    <div className={styles.upInfo} />
                    <div className={styles.itadoriYuji}>{name}</div>
                    <div className={styles.ASDASDA}>
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