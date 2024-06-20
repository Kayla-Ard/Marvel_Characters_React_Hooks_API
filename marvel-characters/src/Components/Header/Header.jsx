
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Marvel Characters</h1>
            <h6>Click on a character to see details</h6>
        </header>
    );
};

export default Header;
