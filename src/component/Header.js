import React from 'react'

const header = () => (
  <div>
    <h2> 😊header 컴포넌트 </h2>
    <h4>오늘의 날자: {new Date().toLocaleDateString()}</h4>
  </div>
)

export default header

