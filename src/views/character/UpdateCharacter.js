import { CharacterProvider } from '../../contexts/CharacterContext';
import CharacterUpdate from '../../components/character/CharacterUpdate';
import CharacterList from '../../components/character/CharacterList';

const UpdateCharacter = () => {
    return (
        <section>
            <CharacterProvider>
                <CharacterUpdate></CharacterUpdate>
                <CharacterList></CharacterList>
            </CharacterProvider>
        </section>
    )
}
export default UpdateCharacter;