import './App.css';
import About from './components/About';
import AddForm from "./components/AddForm";
import DeleteAll from './components/DeleteAll';
import ExploreHeader from './components/ExploreHeader';
import FilmGrid from "./components/FilmGrid";
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <header>
        <nav className="navbar">
            <Link to="/" className="navitem">Home</Link>
            <Link to="/" className="navitem">PHOTOGÉNIE</Link>
            <Link to="/about" className="navitem">About</Link>
        </nav>
    </header>
    <Routes>
      <Route path="/" element={
        <div className="content">
          <AddForm />
          <ExploreHeader />
          <FilmGrid />
          <DeleteAll />
        </div>
      } />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;