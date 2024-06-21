
import { useState } from 'react';
import CharacterList from './Components/CharacterList/CharacterList.jsx';
import CharacterDetails from './Components/CharacterDetails/CharacterDetails.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import './index.css'
import CharacterModal from './Components/CharacterModal/CharacterModal.jsx';
import './Components/Font/Fonts.css';

const App = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <div className="App">
            <Navbar />
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
