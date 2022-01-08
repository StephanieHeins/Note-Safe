import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createnote' element={<CreateNote />} />
          <Route path='/notes' element={<Notes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
