import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

import CadastrarIcon from '../../assets/images/cadastrarIcon.svg';

import { handleInputChange, getResults } from './actions';

class SearchForm extends Component {
    setParams(nome, email, cpf) {
        window.location.href = `/consulta?nome=${nome}&email=${email}&cpf=${cpf}`;
    }

    render() {
        return(
            <div className='search__form'>
                <div className='search__header'>
                    <h1 className='search__title'>Consulta de responsáveis</h1>
                    <div className='search__new-button'>
                        <Link to='/novo'>
                            <img src={CadastrarIcon} alt='Cadastrar' />
                        </Link>
                    </div>
                </div>
                <div className='search__content'>
                    <div className='search__input-wrapper'>
                        <label htmlFor='nome'>Nome:</label>
                        <input 
                            type='text'
                            id='nome'
                            value={this.props.name}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='search__input-wrapper'>
                        <label htmlFor='email'>E-mail:</label>
                        <input
                            type='email'
                            id='email'
                            value={this.props.email}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='search__input-wrapper'>
                        <label htmlFor='cpf'>CPF:</label>
                        <input
                            type='text'
                            id='cpf'
                            value={this.props.cpf}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className='search__input-wrapper'>
                        <button onClick={() => this.setParams(this.props.name, this.props.email, this.props.cpf)}>
                            Consultar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.Search.name,
    email: state.Search.email,
    cpf: state.Search.cpf,
});
const mapDispatchToProps = dispatch => bindActionCreators({ handleInputChange, getResults }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
