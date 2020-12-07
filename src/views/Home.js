import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

/*
 Det her er forsiden vår. Når man starter react filen så 
 kommer man til denne siden. Videre har denne siden bilde og bootstrap
 for design.
 */

const Home = () => {
    return (
        <Row>
            <Col>
                <section>
                    <h3>Velkommen til Nintendo game</h3>
                    <p>Dette er en informasjons side om Nintendo</p>
                    <Image src="Nintendo.jpg" roundedCircle height="350px"/>
                </section>
            </Col>
        </Row>
    )
}
export default Home;