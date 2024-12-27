import React from 'react'
import Item from './Item'

const List = ({todo}) => {
  return (
    <div className="List">
        <h3>List 컴포넌트 내용보기</h3>
        <div>
          {todo.map((item) => (<div>{Item.content}</div>))}
        </div>
    <Item/>
    </div>
  );
};

export default List;

// 변형메서드 map()콘솔에 해보기
// let arr = [1,2,3,4]
// let newArr = arr.map((item)=> item)
// console.log(newArr)
//  결과 [3,6,9,12]