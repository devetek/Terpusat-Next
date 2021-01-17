import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';

export interface LayourProps {
  children: any
}

const Layout = (props: LayourProps) => {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout
