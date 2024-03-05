import './App.css';
import HomePage from './pages/home/homePage';
import Blog from './pages/blog/blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import noPage from './pages/noPage/noPage.jsx'
import NoPage from './pages/noPage/noPage.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/blog' Component={Blog} />
          <Route path='*' Component={NoPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
