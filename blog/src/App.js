import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state는 변경되면 html이 자동으로 재렌더링이 된다.
  // -> 자주 바뀌는 변수는 state로
  let [title, changeTitle] = useState(['남자 코트 추천', '남자 니트 추천']);
  let [upCount, changeUpCount] = useState(0);

  function changeTitleOnClick() {
    var titleArray = [...title]; //deep copy
    titleArray[1] = '여자 니트 추천';
    changeTitle( titleArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      <div className='list'>
        <h3>{ title[1] } <span onClick={ ()=>{changeUpCount(upCount+1)} }> 👍 </span> { upCount } </h3>
        <p>10월 5일 발행</p>
        <hr/>
      </div>

      <button onClick={ changeTitleOnClick }> ChangeButton </button>
    </div>
  );
}

export default App;
