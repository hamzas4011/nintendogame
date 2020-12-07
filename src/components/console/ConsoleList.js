import { Row, Col } from 'react-bootstrap';
import { useContext, useState} from 'react';
import { ConsoleContext } from '../../contexts/ConsoleContext';
import ConsoleItem from './ConsoleItem';

const ConsoleList = () => {
    const { consoles } = useContext( ConsoleContext );
    const [ consolesState ] = consoles;
    const [ filter, setSearch] = useState("");
    const generateConsoles = () =>{
    return consolesState.filter(obj => obj.name.includes(filter)).map((consoles, i) => {
         return <ConsoleItem key={i} {...consoles}></ConsoleItem>
        }
    )
}
        const searchConsoles = (e) =>{
            setSearch(e.target.value);
        }

        return (
            <section>
                <Row>
                    <Col>
                    <label>Søk</label>
                    <input onChange={searchConsoles} placeholder="Søk navn på konsoll..." type="text"></input>
                    </Col>
                </Row>
                <Row xl={ 3 }>
                    {generateConsoles()}
                </Row>
            </section>
        )
}

export default ConsoleList;