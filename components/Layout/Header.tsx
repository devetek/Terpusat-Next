import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt="Terpusat"
                    width="30"
                    height="30"
                    src="/assets/images/logos/terpusat.png"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header