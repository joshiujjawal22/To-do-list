import React from 'react'

export default function List (props) {
  return (
    <ul style={{color:'green',fontWeight:'bolder',fontSize:'20px'}}>
      {props.items.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
              {item.name}
          </span>
          <button onClick={() => props.remove(item)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}