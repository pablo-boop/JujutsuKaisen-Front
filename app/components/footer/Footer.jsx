import Link from "next/link";
import { AiFillInstagram,
         AiFillTwitterCircle,
         AiFillMail } from "react-icons/ai";

import styles from './footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer}>

         <p className={styles.texto}>©Copyright-2023 Todos os direitos reservados.</p>

        <div className={styles.sociais}>
        <Link href={'https://www.instagram.com/'} target='_blank' className={styles.link}>
          <AiFillInstagram className={styles.icone} />
        </Link>

        <Link href={'https://www.twitter.com/'} target='_blank' className={styles.link}>
          <AiFillTwitterCircle className={styles.icone} />
        </Link>

        <Link href={'https://www.gmail.com/'} target='_blank' className={styles.link}>
          <AiFillMail className={styles.icone} />
        </Link>
        </div>

        </div>
    )
}
export default Footer;