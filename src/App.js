import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      {/* we will change so  */}

      <Footer />
    </div>
  );
}

export default App;
