import React, { useState } from 'react'

const Main = ({high, location, favorList}) => {
 const [count,setCount]=useState(0)
  function handleOnclick(){
    alert("버튼 클릭했습니다")
  }
}
function onIncrease(){
//console.log(count+1)
setCount(count+1)
}
function onDecrease(){
  setCount(count-1)
}

//export const Main = (propsfvc) => {
  //  console.log(props)
  return (
    <div>
<h2>카운트 만들기</h2>
<h2>{count}</h2>
<button onClick={onIncrease}>+</button>
<button onClick={onDecrease}>+</button>

<h2>클릭 만들기!</h2>
<button onaClick={handleOnclick}>클릭하세요!</button>


    Main
    학교 이름은 {props.name}입니다 
    {hi}는 {lo}에 있습니다. <br/>
    {favorList.length}개의 음식을 좋아합니다

    </div>
  )

Main.defaultProps={
  favorList:[]
}

export default Main

//rafce