import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <main style={{minHeight: "93vh"}}></main>
        <Footer />
      </>
    </div>
  );
}

export default App;
