import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing"

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Landing />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
