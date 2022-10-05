import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '바인딩 테스트'; 

  function test(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <img src={ logo }></img>
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
