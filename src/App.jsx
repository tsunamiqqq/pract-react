import TodoList from './components/TodoList'

function App() {
  const tasks = [
    { id: 1, text: 'Прокинутися', done: true },
    { id: 2, text: 'Поснідати', done: true },
    { id: 3, text: 'Підключитися до пари', done: true },
    { id: 4, text: 'Зробити домашнє завдання', done: false },
  ]

  return (
    <div className="app">
      <div className="container">
        <h1>Список задач</h1>
        <p className="subtitle">Застосунок на React</p>
        <TodoList tasks={tasks} />
      </div>
    </div>
  )
}

export default App