import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  )
}

export default App
