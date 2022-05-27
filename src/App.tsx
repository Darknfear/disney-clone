import './App.css';
import { NavbarCustom } from './components';
import { Home, Detail } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <div className="App">
          <Router>
              <NavbarCustom />
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path='/detail' element={<Detail />}></Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
