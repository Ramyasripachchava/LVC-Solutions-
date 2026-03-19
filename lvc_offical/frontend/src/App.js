import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/home';
import About from './components/aboutus';
import Service from "./components/services"
import Insight from "./components/insight"
import Header from './components/header';
import Contact from './components/contact';
import Projects from './components/projects';
import Careers from './components/careers';
import BlogPage from './components/blog';
import CareersIntern from './components/CareersIntern';
import InternForm from './components/internForm';

import Products from './components/products';
import BlogArticle from './components/blogPost';



function App() {


  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/blog/:blogId' element={<BlogArticle />} />
          <Route path="/careers-intern" element={<CareersIntern />} />
          <Route path="/careers-intern/form" element={<InternForm />} />
          <Route path="/products" element={<Products />} />
          
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
