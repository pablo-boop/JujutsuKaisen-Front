import styles from "./styles.module.css";

const Cards = () => {
    return (
        <div className={styles.box}>
            <div className={styles.frontCard}>
                <div className={styles.overlapGroup}>
                    <div className={styles.card} />
                    <img className={styles.background} alt="Background" src={'./yuji.webp'} />
                    <img className={styles.img} alt="Img" src={'./yuji.webp'} />
                    <div className={styles.infos} />
                    <div className={styles.upInfo} />
                    <div className={styles.itadoriYuji}>ITADORI YUJI</div>
                    <div className={styles.ASDASDA}>
                        ASDASDA
                        <br />
                        asdasdasdasdasdas
                    </div>
                    <div className={styles.textWrapper}>80 / 70</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;