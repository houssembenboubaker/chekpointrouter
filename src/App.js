
import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movielist from './component/Movielist';
import { Data } from './Data';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from './pages/Detail';
import Notfound from './component/Notfound';
function App() {
  const [movies, setMovies] = useState(Data)
  const [search, setSearch] = useState("")
  const addmovie =(newmovie)=>setMovies([...movies,newmovie])
  return (
    <div className="App">
    <Navigation addmovie={addmovie} serch={search} setSearch={setSearch}/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="*" element={<Notfound/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/movies" element={<Movielist movies={movies} search={search}/>}/>
     <Route path="/details/:id" element={<Detail movies={movies}/>}/>
     </Routes>
    </div>
  );
}
export default App;
