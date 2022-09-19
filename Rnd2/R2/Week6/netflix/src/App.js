import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Slice from './components/slide/Slice';
import MovieSection from './components/movie/MovieSection';
import MovieCard from './components/movie/MovieCard';

function App() {
  return (
    <div>
      <Header></Header>
      <Slice></Slice>
      <div className="flex flex-col w-full bg-black h-fit ">
        <MovieSection title="Netflix Originals">
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </MovieSection>
        <MovieSection title="Trending">
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </MovieSection>

      </div>
    </div>
  );
}

export default App;
