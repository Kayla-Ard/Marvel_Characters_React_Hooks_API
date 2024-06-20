
import styles from './CharacterModal.module.css';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

const CharacterModal = ({ character, onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                <CharacterDetails characterId={character.id} />
            </div>
        </div>
    );
};

export default CharacterModal;
