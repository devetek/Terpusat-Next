import clsx from 'clsx';
import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Nav from 'react-bootstrap/Nav';

import Layout from 'components/Layout';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tentang - Terpusat</title>
        <meta name="description" content="Visi, Misi, History dan Tentang Terpusat, pusat belanja, investasi, layanan, informasi untuk majukan brand Indonesia." />
      </Head>

      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pb-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="0">History</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
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
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <CustomToggle eventKey="1">Visi & Misi</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Card.Text className="font-14 font-weight-bold">
                        Visi
                      </Card.Text>
                      <Card.Text className="font-14">
                        <i>"Mewujudkan kemandirian berfikir, berkreasi, berekonomi seluas-luasnya bagi seluruh umat manusia, melalui jalan yang diridhoi Allah azza wa jalla"</i>
                      </Card.Text>
                      <br /><br />
                      <Card.Text className="font-14 font-weight-bold">
                        Misi
                      </Card.Text>
                      <Card.Text className="font-14">
                        <ul>
                          <li>Membuat struktur kepengurusan yang terorganisir</li>
                          <li>Membangun forum diskusi sebagai jalan utama untuk mengambil keputusan</li>
                          <li>Melakukan kerjasama dengan berbagai pihak dengan perjanjian yang baik</li>
                          <li>Melaporkan hal-hal yang telah disepakati dengan transparan dan akuntabel</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default AboutPage;