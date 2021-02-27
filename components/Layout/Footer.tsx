import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import clsx from "clsx";

import styles from '@styles/Footer.module.scss';

/**
 * Footer global component
 * 
 * References:
 * - https://icons.getbootstrap.com/
 * - https://getbootstrap.com/docs/5.0/utilities/display/#hiding-elements
 */
const Footer = () => {

    return (
        <>
            <a title="WhatsApp" href="https://wa.me/+6289531803699?text=Halo%20terpusat" className={styles.floatingGlobalButton} target="_blank" rel="noreferrer noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={clsx(styles.floatingGlobalButtonContent, "bi bi-whatsapp")} viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
            </a>
            <footer className={clsx(styles.footermobilecontainer, "d-block d-sm-none")}>
                <Container>
                    <Row>
                        <Col xs={3} md={3} lg={3} className="text-center">
                            <Link href="/" as="/">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={3} md={3} lg={3} className="text-center">
                            <Link href="/location" as="/location">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={3} md={3} lg={3} className="text-center">
                            <Link href="/team" as="/team">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={3} md={3} lg={3} className="text-center">
                            <Link href="/about" as="/about">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <footer className="d-none d-sm-block">
                <Container>
                    <Row>
                        <Col xs={3} md={3} lg={2}>
                            <p className={styles.heading}>Terpusat</p>
                            <Nav as="ul" className={clsx("flex-column")}>
                                <Link href="/about" as="/about">
                                    <Nav.Link href="/about" className={styles.navlinkprimary}>Tentang Terpusat</Nav.Link>
                                </Link>
                                <Link href="/team" as="/team">
                                    <Nav.Link href="/team" className={styles.navlinkprimary}>Team</Nav.Link>
                                </Link>
                                <Link href="/location" as="/location">
                                    <Nav.Link href="/location" className={styles.navlinkprimary}>Lokasi</Nav.Link>
                                </Link>
                                <Link href="#daftar-mitra" as="#daftar-mitra">
                                    <Nav.Link href="#daftar-mitra" className={styles.navlinkprimary}>Menjadi Mitra Brand</Nav.Link>
                                </Link>
                                <Link href="#dana-mitra" as="#dana-mitra">
                                    <Nav.Link href="#dana-mitra" className={styles.navlinkprimary}>Pendanaan Mitra Brand</Nav.Link>
                                </Link>
                                <Link href="#careers" as="#careers">
                                    <Nav.Link href="#careers" className={styles.navlinkprimary}>Karir</Nav.Link>
                                </Link>
                            </Nav>
                        </Col>
                        <Col xs={5} md={5} lg={5}>
                            <p className={styles.heading}>Hubungi Kami</p>
                            <Nav className="flex-column">
                                <Nav.Link className={clsx(styles.subHeading, styles.navlinknon, styles.navlinkprimary)}>Kantor Terpusat</Nav.Link>
                                <Nav.Link href="https://g.page/terpusat?share" className={clsx(styles.navlinknon, styles.navlinkprimary)}>Jl. Bakung No.23 Rt 02/Rw 12, Kelapa Dua Wetan</Nav.Link>
                                <Nav.Link href="https://g.page/terpusat?share" className={clsx(styles.navlinknon, styles.navlinkprimary)}>Ciracas, Jakarta Timur 13730</Nav.Link>
                                <Nav.Link className={clsx(styles.navlinknon, styles.navlinkprimary)}>Senin-Jumat 09:00 - 17:00</Nav.Link>
                                <Nav.Link href="https://wa.me/+6289531803699?text=Halo%20terpusat" className={clsx(styles.navlinknon, styles.navlinkprimary)}>Telp. +62 895-3180-3699</Nav.Link>
                                <Nav.Link href="mailto:prakasa@devetek.com" className={clsx(styles.navlinknon, styles.navlinkprimary)}>Email: prakasa@devetek.com</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={5} md={5} lg={5}>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};

export default Footer;