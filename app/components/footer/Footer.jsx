import { AiFillInstagram,
         AiFillTwitterCircle,
         AiFillMail } from "react-icons/ai";
import styles from './footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer}>

         <p>©2023 Todos os direitos reservados.</p>

        <div className={styles.icones}>
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillMail />
        </div>

        </div>
    )
}
export default Footer;