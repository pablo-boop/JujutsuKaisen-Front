import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>  {/*div Header body*/}

            {/*imagem itadori*/}
            <img src={'/itadori-header.webp'} width={100} height={100}></img>

            {/*imagem da logo*/}
            <div className={styles.img}>
                <Link href={'/'}>
                    <img src={'/jujutsu-japanese.png'} width={250} height={100} className={styles.logo}></img>
                </Link>
            </div>

            <nav className={styles.nav}>
                {/*lista de links para as outras páginas*/}
                <ul className={styles.ul}>
                    <li><Link href={'/Contato'}>Contato</Link></li>
                    <li><Link href={'/S'}>S</Link></li>
                    <li><Link href={'/'}>Detalhes</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;