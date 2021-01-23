import clsx from 'clsx';
import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Layout from 'components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tentang - Terpusat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
        <meta name="description" content="Tentang Terpusat - Pusat belanja, investasi, layanan, informasi brand Indonesia." />
      </Head>

      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pb-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title>Tentang</Card.Title>
                    <Card.Text className="font-14">
                      Terpusat adalah pusat bisnis lokal yang berdiri sejak 2012. Dimulai dari divisi teknologi kami yang bergerak di bidang pelayanan teknologi yang dipromotori oleh Nedya Amrih Prakasa dan Muhammad Arifin. Devetek adalah lini bisnis terpusat di bidang teknologi. Dengan pengalaman lebih dari 5 tahun. Dan berhasil membantu memecahkan masalah dari berbagai lini bisnis dan pemerintahan dengan pendekatan teknologi.
                    </Card.Text>
                    <Card.Text className="font-14">
                      Selain membantu kehidupan dengan pendekatan teknologi, devetek telah mampu memberikan layanan konsultasi teknologi untuk kebutuhan sistem guna memberikan manfaat berlebih berupa efisiensi dan efektifitas.
                    </Card.Text>
                    <Card.Text className="font-14">
                      Bergerak di tahun 2016, dengan telah suksesnya layanan teknologi kami. Terpusat mulai melebarkan sayap ke bisnis penyediaan barang. Dengan pengetahuan yang mumpuni di bidang teknologi, kami dengan cekatan mampu beradaptasi dengan hadirnya platform-platform e-commerce dan memanfaatkannya sebagai lahan bisnis baru.
                    </Card.Text>
                    <Card.Text className="font-14">
                      Dengan keterbatasan sumberdaya, dan melewati berbagai situasi, terpusat mampu menjalankan mempertahankan bisnis baru ini dengan tim Nedya Amrih Prakasa dan Gandhos. Barang yang kami sediakan untuk saat ini fokus di bidang perikanan dan peternakan.
                    </Card.Text>
                    <Card.Text className="font-14">
                      Di awal tahun 2020, terpusat kembali melebarkan sayapnya di lini bisnis fashion, khususnya fashion muslim. Digawangi oleh Nedya Amrih Prakasa dan Anggi Ranggita Asri. Saat ini terpusat telah memiliki brand fashion dengan nama ulook_id.
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

export default AboutPage;