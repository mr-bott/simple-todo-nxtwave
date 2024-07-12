// Write your code here
import {Component} from 'react'
import './index.css'

const TodoItem = props => {
  const {details, deleteItem} = props
  const {id, title} = details

  const Delete = () => {
    deleteItem(id)
    //console.log(id)
  }
  return (
    <li className="mm">
      <p className="pp">{title}</p>
      <button className="btn" onClick={Delete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
