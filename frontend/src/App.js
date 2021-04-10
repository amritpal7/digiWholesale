import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';

const App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>  
      <Container>
       <Route path='/' component={HomeScreen} exact />
       <Route path='/product/:id' component={Product} />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
