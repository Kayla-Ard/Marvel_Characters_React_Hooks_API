import { useState } from 'react';
import CharacterList from './Components/CharacterList/CharacterList.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import './index.css';
import CharacterModal from './Components/CharacterModal/CharacterModal.jsx';
import './Components/Font/Fonts.css';
import SpiderManSwing from './Components/SpiderManSwing/SpiderManSwing';
import HulkDrop from './Components/HulkDrop/HulkDrop';

const App = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        setIsModalOpen(true); 
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
        setIsModalOpen(false); 
    };

    return (
        <div className="App">
            <Navbar />
            {!isModalOpen && <SpiderManSwing />}
            {!isModalOpen && <HulkDrop />}
            <Header />
            <div className="content">
                <CharacterList onCharacterSelect={handleCharacterSelect} />
            </div>
            {selectedCharacter && (
                <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;
