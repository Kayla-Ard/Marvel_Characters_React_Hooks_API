
import styles from './Navbar.module.css';
import marvelLogo from './marvel.jpg'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={marvelLogo} alt="Marvel Logo" className={styles.logoImage} />
            </div>
            <div className={styles.navItems}>
                <button className={styles.homeButton}>Home</button>
            </div>
        </nav>
    );
};

export default Navbar;
