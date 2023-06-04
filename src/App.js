import './App.css';
import AddForm from "./components/AddForm";
import DeleteAll from './components/DeleteAll';
import FilmGrid from "./components/FilmGrid";

function App() {
  return (
    <div className="content">
        <AddForm />
        <FilmGrid />
        <DeleteAll />
    </div>
  );
}

export default App;