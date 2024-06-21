
import styles from './Navbar.module.css';
import The_Marvel_Universe from './The_Marvel_Universe.jpg';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={The_Marvel_Universe} alt="Marvel Group" className={styles.stretchedImage} />
        </nav>
    );
};

export default Navbar;

