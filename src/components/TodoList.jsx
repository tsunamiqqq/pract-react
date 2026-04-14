import TodoItem from './TodoItem'

function TodoList({ tasks }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          text={task.text}
          done={task.done}
        />
      ))}
    </div>
  )
}

export default TodoList