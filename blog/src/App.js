import React, { useState } from 'react';
import './App.css';

function App() {
  // state는 변경되면 html이 자동으로 재렌더링이 된다.
  // -> 자주 바뀌는 변수는 state로
  let [title, changeTitle] = useState(['남자 코트 추천', '남자 니트 추천']);
  let [upCount, changeUpCount] = useState(0);

  function changeTitleOnClick() { // 복사본을 만들어서 사용하자
    var titleArray = [...title]; //deep copy
    titleArray[0] = '여자 코트 추천';
    titleArray[1] = '여자 니트 추천';
    changeTitle( titleArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className='list'>
        <h3>{ title[0] } <span onClick={ ()=>{changeUpCount(upCount+1)} }> 👍 </span> { upCount } </h3>
        <p>10월 5일 발행</p>
        <hr/>
      </div>
      
      <div className='list'>
        <h3>{ title[1] } <span onClick={ ()=>{changeUpCount(upCount+1)} }> 👍 </span> { upCount } </h3>
        <p>10월 5일 발행</p>
        <hr/>
      </div>

      <button onClick={ changeTitleOnClick }> ChangeButton </button>
      
      <Modal/>

    </div>
  );
}

function Modal(){ // component
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}

export default App;