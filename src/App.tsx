import './App.css'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <main className='App'>
      <h3>Simple Todo App - Recoil</h3>
      <AddTodo/>
      <TodoList/>
    </main>
    
  );
};

export default App;
