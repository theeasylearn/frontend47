import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Product from './components/products';
import Service from './components/services';
import Contactus from './components/contactus';
import './site.css';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contactus />);