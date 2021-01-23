import clsx from 'clsx';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import Layout from 'components/Layout';
import GraphqlClient from '@libs/graphql';
import ProductQuery from '@queries/productDetail/product';
import ProductsPageQuery from '@queries/productDetail/productsPage';


export async function getStaticProps({ params }) {
    const variables = { "slug": params.slug };
    const { product } = await GraphqlClient(ProductQuery, variables);

    return {
        props: {
            product
        },
    }
}

export async function getStaticPaths() {
    const { products } = await GraphqlClient(ProductsPageQuery);

    return {
        paths: products.map((product: { slug: any; }) => {
            return {
                params: {
                    slug: product.slug,
                },
            }
        }),
        fallback: false,
    }
}

/**
 * 
 * Product detail page, query/mutation data can be found from location queries/productDetail
 * 
 * @param product Product detail
 * 
 */
const ProductDetailPage = ({ product }) => {
    const router = useRouter();

    if (!router.isFallback && !product?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const images = product?.images ?? [];

    return (
        <Layout>
            <Head>
                <title>{product.name} - Terpusat</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />

                <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
                <meta name="description" content="Tentang Terpusat - Pusat belanja, investasi, layanan, informasi brand Indonesia." />
            </Head>
            <main>
                <Container fluid className="p-0">
                    <div className={clsx('mt-4 pb-4 pt-2')}>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Row className="mt-0 ml-0 mr-0 mb-0 pl-0 pr-0 pb-0 pt-0 font-14">
                                        <Col xs={6} md={6} lg={6}>
                                            <Carousel>
                                                {
                                                    images.map((image: { id: any; url: string; }) => {
                                                        return (
                                                            <Carousel.Item key={image.id}>
                                                                <img
                                                                    width="100%"
                                                                    className="d-block w-100"
                                                                    src={image.url}
                                                                    alt={`${product.name}-${image.id}`}
                                                                />
                                                            </Carousel.Item>
                                                        )
                                                    })
                                                }
                                            </Carousel>
                                        </Col>
                                        <Col xs={6} md={6} lg={6}>
                                            Harga: {product.price}
                                        </Col>
                                        <Col className="mt-4" xs={12} md={12} lg={12} dangerouslySetInnerHTML={{ __html: product.description.html }} />
                                    </Row>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            </main>
        </Layout>
    )
}

export default ProductDetailPage;