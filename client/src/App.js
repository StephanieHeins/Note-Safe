import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing"

function App() {
  return (
      <>
        <Header />
        <main>
          <Landing />
        </main>
        <Footer />
      </>
  );
}

export default App;
