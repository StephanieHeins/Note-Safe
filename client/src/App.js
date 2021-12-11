import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Notes from "./pages/Notes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/notes' element={<Notes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
