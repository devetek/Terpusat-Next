import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <footer>
            <Row>
                <Col xs={12} md={3} lg={3}>
                    <p>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </p>
                </Col>
                <Col xs={4} md={2} lg={2}>1</Col>
                <Col xs={4} md={2} lg={2}>2</Col>
                <Col xs={4} md={2} lg={2}>3</Col>
                <Col xs={12} md={2} lg={3}>4</Col>
            </Row>
        </footer>
    )
};

export default Footer;