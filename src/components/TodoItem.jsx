function TodoItem({ text, done }) {
  return (
    <div className={`todo-item ${done ? 'done' : ''}`}>
      <span>{text}</span>
      <span className="status">
        {done ? 'Виконано' : 'В процесі'}
      </span>
    </div>
  )
}

export default TodoItem
