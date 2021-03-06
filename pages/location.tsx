import clsx from 'clsx';
import Head from 'next/head';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Layout from 'components/Layout';

import styles from '@styles/Location.module.scss';

const LocationPage = () => {
  const handleSelectMobile = (eventKey) => console.log(`Mobile selected ${eventKey}`);
  const handleSelectDesktop = (eventKey) => console.log(`Desktop selected ${eventKey}`);

  return (
    <Layout>
      <Head>
        <title>Lokasi - Terpusat</title>
        <meta name="description" content="Lokasi Terpusat, temukan pusat belanja, investasi, layanan, informasi untuk majukan brand Indonesia." />
      </Head>

      <main>
        <Container fluid className={clsx(styles.container, "p-0")}>
          <Row className={clsx('mt-4 pb-4 pt-2')}>
            <Col xs={12} sm={6} md={4} lg={3} xl={2}>
              {/* <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title>Lokasi</Card.Title>
                    <Card.Text className="font-14">
                      Alamat: Jl. Bakung No.23 Rt 02/Rw 12, Kelapa Dua Wetan, Ciracas, Jakarta Timur 13730
                    </Card.Text>
                    <Card.Text>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056461.3156304117!2d107.11328285116409!3d-6.8440022798323135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed66d4c445ff%3A0xda0cab0d5d9ca6df!2sTerpusat!5e0!3m2!1sid!2sid!4v1611044056366!5m2!1sid!2sid" width="100%" height="450" frameBorder="0" style={{border: 0}} aria-hidden="false" tabIndex={0}></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck> */}
              <Nav variant="pills" className={clsx(styles.navMobile, "d-sm-none")} onSelect={handleSelectMobile}>
                <Nav.Link active eventKey="location-jakarta">Jakarta</Nav.Link>
              </Nav>
              <Nav variant="pills" className="flex-column d-none d-sm-block" onSelect={handleSelectDesktop}>
                <Nav.Link active eventKey="location-jakarta">Jakarta</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} sm={6} md={8} lg={9} xl={10}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Text className="font-14">
                      Telp: <a title="WhatsApp Terpusat" href="https://wa.me/+6289531803699?text=Halo%20terpusat" target="_blank" rel="noreferrer noopener">+62 895-3180-3699</a>
                    </Card.Text>
                    <Card.Text>
                      <iframe title="Lokasi Terpusat" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056461.3156304117!2d107.11328285116409!3d-6.8440022798323135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed66d4c445ff%3A0xda0cab0d5d9ca6df!2sTerpusat!5e0!3m2!1sid!2sid!4v1611044056366!5m2!1sid!2sid" width="100%" height="450" frameBorder="0" aria-hidden="false" tabIndex={0}></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout >
  )
}

export default LocationPage;