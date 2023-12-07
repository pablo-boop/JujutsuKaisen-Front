import Link from "next/link";
import {
    AiFillInstagram,
    AiFillTwitterCircle,
    AiFillMail,
    AiFillHeart
} from "react-icons/ai";

import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}> {/*Footer body*/}

            <p className={styles.texto}>©Copyright-2023 Todos os direitos reservados.</p> {/*texto direitos reservados*/}

            <div className={styles.sociais}> {/*Links para redes sociais e icones*/}
                <Link href={'https://www.instagram.com/jujutsukaisen/'} target='_blank' className={styles.link}>
                    <AiFillInstagram className={styles.icone} /> {/*icone Instagram*/}
                </Link>

                <Link href={'https://twitter.com/Jujutsu_Kaisen_'} target='_blank' className={styles.link}>
                    <AiFillTwitterCircle className={styles.icone} /> {/*icone Twitter*/}
                </Link>

                <Link href={'https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen?utm_source=google&utm_medium=paid_cr&utm_campaign=CR-Paid_Google_Web_Conversion_LATAM_BR_Trademark_SVOD-PremVsHomeA&utm_term=crunchyroll+jujutsu+kaisen&referrer=google_paid_cr_CR-Paid_Google_Web_Conversion_LATAM_BR_Trademark_SVOD-PremVsHomeA&gclid=CjwKCAiA98WrBhAYEiwA2WvhOozF7mesOGqBigf3Uihv79hLsPpxmBQjiVhpr-ut6N4A11xrlmklZRoCnVQQAvD_BwE'} target='_blank' className={styles.link}>
                    <AiFillHeart className={styles.icone} />  {/*icone Gmail*/}
                </Link>
            </div>

        </div>
    )
}
export default Footer;