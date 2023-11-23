import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return(
    <div className={styles.header}>  {/*div Header body*/}

         {/*imagem itadori*/}
        <img src='bandai-jujutsu-kaisen-yuji-itadori-001-1000x1000 (1).webp' width={100} height={100}></img>

        {/*imagem da logo*/}
        <div className={styles.img}>
            <img src='sorcery-fight-5f2f76df8ce9a.png' width={210} height={110}></img>
        </div>

        <nav className={styles.nav}>
         {/*lista de links para as outras páginas*/}
        <ul className={styles.ul}>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Contato</Link></li>
        <li><Link href={'/'}>Detalhes</Link></li>
        </ul>
      </nav>
    </div>
    )
}

export default Header;