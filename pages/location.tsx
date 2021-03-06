import clsx from 'clsx';
import Head from 'next/head';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import Layout from 'components/Layout';
import Iframe from 'components/Iframe';

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
              <Row>
                <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                  <CardDeck>
                    <Card>
                      <Card.Body>
                        <Card.Text className="font-14">
                          <Image className={clsx(styles.imgProfile, 'img-thumbnail img-thumbnail')} alt="User" src="/assets/images/logos/terpusat.png" roundedCircle />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                  <ListGroup className="mt-3 mb-3">
                    <ListGroup.Item className="font-12">
                      <span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                      </svg>
                      </span>
                      <span className="text-secondary">Jl. Bakung No.23 Rt 02/Rw 12, Kelapa Dua Wetan</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="font-12">
                      <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <span className="text-secondary">
                        <a title="WhatsApp" href="https://wa.me/+6289531803699?text=Halo%20terpusat" className={styles.floatingGlobalButton} target="_blank" rel="noreferrer noopener">
                          +62 895-3180-3699
                        </a>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="font-12">
                      <span className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                      </span>
                      <span className="text-secondary">
                        Pukul 09.00 WIB - 16.00 WIB
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col xs={12} sm={6} md={6} lg={8} xl={8}>
                  <CardDeck className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Text className="font-14">
                          <Iframe
                            width="100%"
                            tabIndex={0}
                            height={450}
                            frameBorder={0}
                            title="Lokasi Terpusat"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056461.3156304117!2d107.11328285116409!3d-6.8440022798323135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed66d4c445ff%3A0xda0cab0d5d9ca6df!2sTerpusat!5e0!3m2!1sid!2sid!4v1611044056366!5m2!1sid!2sid"
                          />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardDeck>
                    <Card>
                      <Card.Body>
                        <Card.Title as="h6">Layanan</Card.Title>
                        <Card.Subtitle className="mb-2 font-13 text-muted">Yang dapat kami berikan kepada Anda</Card.Subtitle>
                        <Card.Text className="font-14">
                          Tidak ada layanan ditemukan...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardDeck>
                    <Card>
                      <Card.Body>
                        <Card.Title as="h6">Barang</Card.Title>
                        <Card.Subtitle className="mb-2 font-13 text-muted">Yang tersedia di lokasi kami</Card.Subtitle>
                        <Card.Text className="font-14">
                          <Badge pill variant="primary">Peternakan</Badge>{' '}
                          <Badge pill variant="secondary">Pertanian</Badge>{' '}
                          <Badge pill variant="success">Fashion Wanita</Badge>{' '}
                          <Badge pill variant="danger">Pets / Hewan Peliharaan</Badge>{' '}
                          <Badge pill variant="warning">Perikanan</Badge>{' '}
                          <Badge pill variant="info">Alat Tulis Kantor</Badge>{' '}
                          <Badge pill variant="light">Makanan dan Minuman</Badge>{' '}
                          <Badge pill variant="dark">Lainnya</Badge>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout >
  )
}

export default LocationPage;