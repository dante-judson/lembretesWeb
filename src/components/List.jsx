import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { removeLembrete } from '../actions'

class List extends Component {

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Lembretes:</th>
                                </tr>
                            </thead>
                                { this.renderTableBody() }
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            lembretes: props.lembretes
        }

        moment.updateLocale('en', {
            relativeTime : {
                future: "em %s",
                past:   "%s atás",
                s  : 'a poucos segundos',
                ss : '%d segundos',
                m:  "um minuto",
                mm: "%d minutos",
                h:  "uma hora",
                hh: "%d horas",
                d:  "um dia",
                dd: "%d dias",
                M:  "um mês",
                MM: "%d meses",
                y:  "um ano",
                yy: "%d anos"
            }
        });

    }


    componentWillReceiveProps(newProps){
        this.setState({lembretes: newProps.lembretes});
    }

    removeLembrete(id){
        this.props.removeLembrete(id);
    }

    getTimeLeft(data){
        return moment(data).fromNow();
    }

    renderTableBody(){
        return <tbody>
            { this.state.lembretes.map(lembrete => {
                return (<tr key={lembrete.id}>
                    <td>
                        {lembrete.lembrete} - {this.getTimeLeft(lembrete.data)}
                        <button className="btn btn-secondary float-right"
                        onClick={() => this.removeLembrete(lembrete.id)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>)
            })}
        </tbody> ;
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators( {removeLembrete}, dispatch);
}

function mapStateToProps(state){
    console.log('state',state);
    return {
        lembretes: state
    }
}

export default connect(mapStateToProps, mapDispathToProps)(List);