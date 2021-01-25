import './App.css';
import Movies from './components/movies';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <main className="container">
      <Movies/>
    </main>
  );
}

export default App;
