import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <div className="App">
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
