import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

import Container from './components//layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';




function App() {

  return (
    <Router>  
      <Container customClass="min-height">
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/company" element={<Company />}> </Route>
          <Route path="/projects" element={<Projects />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/newProject" element={<NewProject />}> </Route>
        </Routes>
      </div>
      </Container>
      <Footer/>
      </Router>
            
    
  );
}

export default App;
