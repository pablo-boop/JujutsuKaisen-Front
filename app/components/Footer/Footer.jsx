import Link from "next/link";
import {
    AiFillInstagram,
    AiFillTwitterCircle,
    AiFillMail
} from "react-icons/ai";

import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}> {/*Footer body*/}

            <p className={styles.texto}>©Copyright-2023 Todos os direitos reservados.</p> {/*texto direitos reservados*/}

            <div className={styles.sociais}> {/*Links para redes sociais e icones*/}
                <Link href={'https://www.instagram.com/'} target='_blank' className={styles.link}>
                    <AiFillInstagram className={styles.icone} /> {/*icone Instagram*/}
                </Link>

                <Link href={'https://www.twitter.com/'} target='_blank' className={styles.link}>
                    <AiFillTwitterCircle className={styles.icone} /> {/*icone Twitter*/}
                </Link>

                <Link href={'https://www.gmail.com/'} target='_blank' className={styles.link}>
                    <AiFillMail className={styles.icone} />  {/*icone Gmail*/}
                </Link>
            </div>

        </div>
    )
}
export default Footer;