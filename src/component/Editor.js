import React, { useState } from 'react'


const Editor = ({onCreate}) => {
    const[content,setContent]=useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onSubmit = () => {
        onCreate(content)
    }

  return (
    <div className='Editor'>
     <h3>😋 Editor 컴포넌트 🌴새롭게 작성할 곳 🎹</h3>
      <input placeholder='오늘의 할 일을 작성해주세요'
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
