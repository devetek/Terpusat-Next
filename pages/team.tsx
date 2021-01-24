import clsx from 'clsx';
import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Layout from 'components/Layout';

const TeamPage = () => {
  return (
    <Layout>
      <Head>
        <title>Team - Terpusat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
        <meta name="description" content="Team Terpusat, dibalik pusat belanja, investasi, layanan, informasi untuk majukan brand Indonesia." />
      </Head>

      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>Operasional</h4>
            </Col>
            <Col xs={6} md={6} lg={3} className={clsx('pb-2 pt-2')}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Gandhos</Card.Title>
                    <Card.Text className="font-12">
                      Semangat kejujuran dan kerja keras selalu dijunjung tinggi. Semoga semakin hari sholatnya semakin tidak ada yang bolong.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>Digital</h4>
            </Col>
            <Col xs={6} md={6} lg={3} className={clsx('pb-2 pt-2')}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Ruli</Card.Title>
                    <Card.Text className="font-12">
                      Anak muda dengan semangat berapi. Dukung dan do'akan semoga semakin dewasa dan menjadi semakin baik.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3} className={clsx('pb-2 pt-2')}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Daus</Card.Title>
                    <Card.Text className="font-12">
                      Freshgraduade yang haus akan belajar. Dedikasi dan konsistensi membuat hasil yang tidak bisa dibohongi.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3} className={clsx('pb-2 pt-2')}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Jodi</Card.Title>
                    <Card.Text className="font-12">
                      Bertalenta dan berkomitmen di bidang fotografer. Foto yang dihasilkan sangat memanjakan mata.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>System</h4>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Prakasa</Card.Title>
                    <Card.Text className="font-12">
                      Hamba Allah, seorang ayah dan suami yang fakir, berusaha menjalankan kehidupan sesuai kemampuan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default TeamPage;
