import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit=(event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange =event => {
        //console.log(event.target.name, event.target.value);
        this.setState( {
            [event.target.name]: event.target.value
        })
    }
    render() {
        //console.log(this.props);
        

        return <form onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder='Escriba una tarea...' 
            onChange={this.onChange} value={this.state.title}></input>
            <br/>
            <br/>

            <textarea name="description" placeholder='Descripión de la tarea' 
            onChange={this.onChange} value={this.state.description}></textarea>
            <input type="submit" />
        </form>
    }

}


