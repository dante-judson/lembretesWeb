import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLembrete, removeAll } from '../actions';
import List from './List';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:'',
            data:{}
        }
    }

    addLembrete(){
        this.props.addLembrete(this.state.text, this.state.data);
        this.setState({text: '', data: ''});
        document.getElementById('inputData').value = '';
    }

    removerTodos(){
        this.props.removeAll();
        this.setState({text: '', data: ''});
        document.getElementById('inputData').value = '';
    }

    renderList(){
        if(this.props.lembretes.length > 0){
            return (<List lembretes={this.props.lembretes}/>)
        } else {
            return <div></div>
        }
    }

    render(){
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="h1">
                        Lembrete Web
                    </div>
                </div> 

                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Eu tenho que..."
                            onChange = {(event) => this.setState({ text: event.target.value })}
                            onKeyPress = {(event) => {if(event.key === 'Enter'){ this.addLembrete() }}}
                            value={this.state.text}/>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <input type="datetime-local" className="form-control" id="inputData"
                        onChange = {event => this.setState({data: event.target.value}) }/>
                    </div>
                </div>   

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <button className="btn btn-primary"
                            onClick = {() => this.addLembrete()}>
                                Adicionar Lembrete
                            </button>

                            <button className="btn btn-danger ml-2"
                            onClick = {() => this.removerTodos()}>
                                Remover todos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        {this.renderList()}
                    </div>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispath) {
    return bindActionCreators({addLembrete, removeAll}, dispath);
}

function mapStateToProps(state){
    return {
        lembretes: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);