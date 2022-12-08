// import React from "react"

// function TodoItem(props) {
//   return <li>
//     <input
//   type="checkbox"
//   checked={this.props.todo.completed}
//   onChange={() => console.log("clicked")}
// />
//     {props.todo.title}
//     </li>
// }

// export default TodoItem



import React from "react"
import { FaTrash } from "react-icons/fa"


class TodoItem extends React.Component {
  render() {
    
    return <li className="item">
        <input
  type="checkbox"
  className="checkbox"
  checked={this.props.todo.completed}
  onChange={() => this.props.handleChangeProps(this.props.todo.id)}
 />
        {this.props.todo.title}
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
        <FaTrash />
</button>
        </li>
  }
}

export default TodoItem