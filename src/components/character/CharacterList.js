import { Row, Col } from 'react-bootstrap';
import { useContext, useState} from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
    const { characters } = useContext( CharacterContext );
    const [ charactersState ] = characters;
    const [ filter, setSearch] = useState("");
    const generateCharacters = () =>{

    return charactersState.filter(obj => obj.name.includes(filter)).map((characters, i) => {
    
        return <CharacterItem key={i} {...characters}></CharacterItem>
        }
    )
}
        const searchCharacters = (e) =>{
            setSearch(e.target.value);
        }
        return (
            <section>
                <Row>
                    <Col>
                    <label>Søk</label>
                    <input onChange={searchCharacters} placeholder="Søk navn på spillfigur..." type="text"></input>
                    </Col>
                </Row>
                <Row xl={ 3 }>
                    {generateCharacters()}
                </Row>
            </section>
        )
}
export default CharacterList;