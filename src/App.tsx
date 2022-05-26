import './App.css';
import { NavbarCustom } from './components';
import { Home } from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavbarCustom />
      <Home />
    </div>
  );
}

export default App;
