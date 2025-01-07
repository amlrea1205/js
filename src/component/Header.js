import React from 'react'

const Header = () => {
    return (
    <div>
        <h2>header컴포넌트</h2>
        <h4>오늘의 날짜:{new Date().toLocaleDateString}</h4>
    </div>
    )
} 

export default Header