import MovieList from "./components/MovieList";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
