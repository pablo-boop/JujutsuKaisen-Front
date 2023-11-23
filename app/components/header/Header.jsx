import Link from 'next/Link'
import styles from './header.module.css'

const Header = () =>{
    <div className={styles.header}>

        <img src='bandai-jujutsu-kaisen-yuji-itadori-001-1000x1000 (1).webp' width={100} height={100}></img>

        <div className={styles.img}>
            <img src='sorcery-fight-5f2f76df8ce9a.png' width={200} height={100}></img>
        </div>

        <nav className={styles.nav}>
        <ul className={styles.ul}>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Contato</Link></li>
        <li><Link href={'/'}>Detalhes</Link></li>
        </ul>
      </nav>
    </div>
}

export default Header;