import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>  {/*div Header body*/}

            {/*imagem itadori*/}
            <img src={'/itadori-header.webp'} width={100} height={100}></img>

            {/*imagem da logo*/}
            <div className={styles.img}>
                <img src={'/title.png'} width={210} height={110}></img>
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