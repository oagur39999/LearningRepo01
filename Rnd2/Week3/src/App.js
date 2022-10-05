import Header from './component/header/header.js'
import './App.css';

const App = () => {
  return (
    <div className="App" style={{
      width:'100%',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize:'100px'
    }}>
      <Header/>
    </div>
  );
}

export default App;
