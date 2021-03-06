import clsx from 'clsx';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Layout from 'components/Layout';

import teams from '@data-static/teams.json';

import styles from '@styles/Team.module.scss';

const TeamPage = () => {
  const goToLink = (link: any, newtab: any = '_blank') => {
    window.open(link, newtab);
  }

  return (
    <Layout>
      <Head>
        <title>Team - Terpusat</title>
        <meta name="description" content="Team Terpusat, dibalik pusat belanja, investasi, layanan, informasi untuk majukan brand Indonesia." />
      </Head>
      <main>
        <Container fluid className="p-0">
          <Row className={clsx('mt-4 pt-2')}>
            {teams.map((team, index) => {
              return (
                <Col key={`${team.color}-${index}`} xs={12} sm={6} md={8} lg={4} xl={3} className={clsx('pb-2 pt-2')}>
                  <CardDeck>
                    <Card>
                      <Card.Img variant="top" src={`https://via.placeholder.com/340x120/${team.color}/000000`} />
                      <Card.Body className="text-center">
                        <Image className={clsx(styles.imgProfile, 'img-thumbnail img-thumbnail')} alt="User" src={team.avatar} roundedCircle />
                        <Card.Title>{team.name}</Card.Title>
                        <Card.Text className="text-secondary mb-1">{team.position}</Card.Text>
                        <Card.Text className="text-muted font-size-sm">{team.address}</Card.Text>
                      </Card.Body>
                      <Card.Footer className={clsx(styles.cardFooterProfile, "text-right")}>
                        <Button onClick={() => goToLink(team.waLink)} variant="outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></Button>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default TeamPage;
