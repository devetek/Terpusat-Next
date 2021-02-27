import React, { Fragment } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import LazyImage from '@components/LazyImage';

import styles from '@styles/Slides.module.scss';

export interface SlidesProps {
    title: string,
    moreLink: string
    data: any[],
}


const Slides = ({ title, data, moreLink }: SlidesProps) => {
    return (
        <Fragment>
            <Row className={clsx('mt-4 pt-2')}>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <h4 className="font-14 font-weight-bold">{ title }</h4>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="font-12 text-right"><a href={moreLink}>Lihat Semua</a></p>
                </Col>
            </Row>
            <Row className={clsx(styles.scrollingWrapper, 'flex-row flex-nowrap pt-2')}>
                {
                    data && data.map((product: any) => {
                        return (
                            <Col key={product.id} xs={6} sm={5} md={4} lg={2}>
                                <CardDeck>
                                    <Card className={clsx(styles.scrollingItemContainer)}>
                                        <LazyImage
                                            alt={product.name}
                                            src={product?.images?.[0]?.url}
                                            link={`/d/${product.slug}`}
                                        />

                                        <Card.Body className={styles.itemBody}>
                                            <Link href={`/d/${product.slug}`} as={`/d/${product.slug}`}>
                                                <Card.Title className="font-12">{product.name}</Card.Title>
                                            </Link>
                                            <Row className={styles.buttonMPContainer}>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Button block variant="outline-success" size="sm">Belanja</Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </Col>
                        )
                    })
                }
            </Row>
        </Fragment>
    )
}

export default Slides;