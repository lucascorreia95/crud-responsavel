import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from "react-router-dom";

import { handleInputChange, create, load, clear } from './actions';

import ConsultarIcon from '../../assets/images/consultarIcon.svg';

class CreateForm extends Component {
    
    componentDidMount() {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
        if (id)
            this.props.load(id);
    }

    componentWillUnmount() {
        this.props.clear();
    }
    
    render() {
        return(
            <div className='create__form'>
                <div className='create__header'>
                    <h1 className='create__title'>{this.props.title}</h1>
                    <div className='create__search-button'>
                        <Link to='/consulta'>
                            <img src={ConsultarIcon} alt='Consultar' />
                        </Link>
                    </div>
                </div>
                <div className='create__content'>
                    <div className='create__input-wrapper'>
                        <label htmlFor='nome'>Nome:</label>
                        <input 
                            type='text'
                            id='nome'
                            value={this.props.name}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='create__input-wrapper'>
                        <label htmlFor='email'>E-mail:</label>
                        <input
                            type='email'
                            id='email'
                            value={this.props.email}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='create__input-wrapper'>
                        <label htmlFor='cpf'>CPF:</label>
                        <input
                            type='text'
                            id='cpf'
                            value={this.props.cpf}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='create__input-wrapper'>
                        <label htmlFor='date'>Data de nascimento:</label>
                        <input
                            type='date'
                            id='date'
                            value={this.props.date}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='create__input-wrapper'>
                        <button onClick={() => this.props.create(this.props.name, this.props.email, this.props.cpf, this.props.date, this.props.id)}>
                            {this.props.button}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.Create.name,
    email: state.Create.email,
    cpf: state.Create.cpf,
    date: state.Create.date,
    title: state.Create.title,
    button: state.Create.button,
    id: state.Create.id
});
const mapDispatchToProps = dispatch => bindActionCreators({ handleInputChange, create, load, clear }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateForm));
