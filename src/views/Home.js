import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
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