import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import Layout from 'components/Layout';
import GraphqlClient from '@libs/graphql';

import LatestProductQuery from '@queries/Home/latestProducts';

import styles from '@styles/Home.module.scss';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const goToLink = (link: any, newtab: any = '_blank') => {
    window.open(link, newtab);
  }

  useEffect(() => {
    let mounted = true;

    GraphqlClient(LatestProductQuery).then(productsData => {
      if (mounted) {
        setProducts(productsData.products);
      }

      return () => mounted = false;
    });
  }, []);


  return (
    <Layout>
      <Head>
        <title>Terpusat | Memajukan Brand Indonesia</title>
        <meta name="description" content="Pusat belanja, investasi, layanan, informasi brand Indonesia." />
      </Head>

      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>Marketplace</h4>
            </Col>
          </Row>
          <Row className={clsx(styles.scrollingWrapper, 'flex-row flex-nowrap pt-2')}>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Tokopedia</Card.Title>
                    <Card.Text className="font-12">
                      Temukan terpusat di tokopedia, belanja sekarang dan dapatkan penawaran terbaik kami.<br /><br />
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://www.tokopedia.com/terpusat')} variant="outline-success" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Bukalapak</Card.Title>
                    <Card.Text className="font-12">
                      Temukan terpusat di bukalapak, belanja sekarang dan dapatkan penawaran terbaik kami.<br /><br />
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://www.bukalapak.com/u/terpusat')} variant="outline-danger" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Shopee</Card.Title>
                    <Card.Text className="font-12">
                      Temukan terpusat di shopee, belanja sekarang dan dapatkan penawaran terbaik kami.<br /><br />
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://shopee.co.id/terpusat')} variant="outline-warning" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>Sosial Media</h4>
            </Col>
          </Row>
          <Row className={clsx(styles.scrollingWrapper, 'flex-row flex-nowrap pt-2')}>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Facebook</Card.Title>
                    <Card.Text className="font-12">
                      Ikutin kami di Facebook, dan pastikan Anda menerima pembaharuan terpusat di facebook
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://www.facebook.com/terpusat')} variant="outline-primary" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Instagram</Card.Title>
                    <Card.Text className="font-12">
                      Ikutin kami di Instagram, dan pastikan Anda menerima pembaharuan terpusat di instagram
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://www.instagram.com/terpusat')} variant="outline-primary" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">Twitter</Card.Title>
                    <Card.Text className="font-12">
                      Ikutin kami di Twitter, dan pastikan Anda menerima pembaharuan terpusat di twitter
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://www.twitter.com/terpusat')} variant="outline-primary" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title className="font-14">WhatsApp</Card.Title>
                    <Card.Text className="font-12">
                      Hubungi kami sekarang, dapatkan penawaran terbaik
                    </Card.Text>
                    <Card.Text className="font-12 text-right">
                      <Button onClick={() => goToLink('https://wa.me/+6289531803699?text=Halo%20terpusat')} variant="outline-primary" size="sm">Kunjungi</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row className={clsx('mt-4 pt-2')}>
            <Col xs={12} md={12} lg={12}>
              <h4>Produk</h4>
            </Col>
          </Row>
          <Row className={clsx(styles.scrollingWrapper, 'flex-row flex-nowrap pt-2')}>
            {
              products && products.map(product => {
                return (
                  <Col key={product.id} xs={6} md={6} lg={3}>
                    <CardDeck>
                      <Card>
                        <Card.Body>
                          <Link href={`/d/${product.slug}`} as={`/d/${product.slug}`}>
                            <Card.Title className="font-14">{product.name}</Card.Title>
                          </Link>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default HomePage;