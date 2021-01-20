import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Layout from 'components/Layout';

const Page404 = () => {
    const router = useRouter();

    const onClickBackButton = (e) => {
        e.preventDefault()
        router.push('/');

    }

    return (
        <Layout>
            <Head>
                <title>Memajukan Brand Indonesia | Terpusat</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />

                <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
                <meta name="description" content="Pusat belanja, investasi, layanan, informasi brand Indonesia." />
            </Head>

            <main>
                <Container fluid className="p-0">
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <CardDeck>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Halaman Tidak Ditemukan</Card.Title>
                                        <Card.Text>
                                            Mohon maaf, halaman yang Anda cari tidak tersedia. Ingin kembali ke halaman utama ?{' '}
                                            <Button variant="light" size="sm" onClick={onClickBackButton}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                                </svg> Kembali
                                            </Button>
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

export default Page404;