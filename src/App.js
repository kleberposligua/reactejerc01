import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';


console.log(tasks);

/* function Helloword0(props) {
  return (
    <div id="hello">
      {props.texto}
      <h3>{props.edad}</h3>
    </div>
  );
} */


//const App2 = () => <div> Este es mi componente: <Helloword/> <Helloword/> </div>

/*
class App extends React.Component {
  render() {
    return (
      <div>
        Este es mi componente....: <Helloword/>
        <Helloword/><Helloword/><Helloword/>
      </div>
    );
  }
}
*/

/* class Helloword extends React.Component {

  state = {
    show: true
  }

  cambiarEstado=() => {
    this.setState({show: !this.state.show});
  }
  render() {
    if(this.state.show){
      return (
      <div id="hello">
        Nombre: {this.props.texto}
        <h3>Edad: {this.props.edad}</h3>
        <button onClick={ this.cambiarEstado }>Cambiar estado</button>
      </div>
      );
    } else {
      return (<h1>
        No hay elementos
        <button onClick={ this.cambiarEstado }>Cambiar estado</button>
      </h1>);
    }

  }
} 

function App() {
  return (
    <div>
      Este es mi componente: <Helloword texto="Kléber" edad="46"/>
      <Helloword texto="Posligua" edad="47"/>
      <Helloword texto="Flores" edad="45"/>
    </div>
  );
}
*/



class App extends React.Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    console.log("agregando una tarea: ", title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }


  deleteTask = (id) => {
    const nuevasTareas = this.state.tasks.filter(tarea => {
      return tarea.id !== id;
    });
    console.log(nuevasTareas);
    this.setState({tasks: nuevasTareas});
  }

  checkDone = (id) => {
    const nuevasTareas = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({tasks: nuevasTareas});
  }

  render() {
    return <div>
      <Router>
        <Routes>
        <Route path="/" element={<div>
          <TaskForm addTask = {this.addTask}/>
          <Tasks tasks = {this.state.tasks} deleteTask={this.deleteTask}
          checkDone={this.checkDone}/>
          </div>}/>
          
        

      
      <Route path="/posts" element={<Posts />} />
    
      </Routes>
      
      </Router>

      

     

    </div>
  }
}

export default App;
