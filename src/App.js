import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Container from './components/pages/layout/Container';
import NewProject from './components/pages/NewProject';


function App() {

  return (
    <Router>  
      <Container customClass="min-height">
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/newproject">NewProject</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/company" element={<Company />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/newProject" element={<NewProject />}> </Route>
        </Routes>
      </div>
      </Container>
      <p>footer</p>
      </Router>
            
    
  );
}

export default App;
