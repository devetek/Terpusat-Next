import clsx from 'clsx';
import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Layout from 'components/Layout';

const LocationPage = () => {
  return (
    <Layout>
      <Head>
        <title>Lokasi - Terpusat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
        <meta name="description" content="Lokasi Terpusat - Pusat belanja, investasi, layanan, informasi brand Indonesia." />
      </Head>

      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pb-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title>Lokasi</Card.Title>
                    <Card.Text>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056461.3156304117!2d107.11328285116409!3d-6.8440022798323135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed66d4c445ff%3A0xda0cab0d5d9ca6df!2sTerpusat!5e0!3m2!1sid!2sid!4v1611044056366!5m2!1sid!2sid" width="100%" height="450" frameBorder="0" style={{border: 0}} aria-hidden="false" tabIndex={0}></iframe>
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