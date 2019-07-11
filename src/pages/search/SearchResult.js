import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import dateFns from 'date-fns';

import { getResults, setDeleteID } from './actions';

import AlterarIcon from '../../assets/images/alterarIcon.svg';
import ExcluirIcon from '../../assets/images/excluirIcon.svg';

class SearchResult extends Component {
    componentDidMount() {
        const url = new URL(window.location.href);
        const nome = url.searchParams.get('nome') ? url.searchParams.get('nome') : '';
        const cpf = url.searchParams.get('cpf') ? url.searchParams.get('cpf') : '';
        const email = url.searchParams.get('email') ? url.searchParams.get('email') : '';

        this.props.getResults(nome, email, cpf);
    }

    dateFormat(date) {
        if (date) {
            return dateFns.format(new Date(date[0], (date[1]-1), date[2]), 'DD/MM/YYYY');
        } 
        return 'Não informado';
    }

    render() {
        return(
            <div className='search__result'>
                <ul className='search__list'>
                    { this.props.records.length > 0 &&
                        this.props.records.map(resp => (
                            <li key={resp.id} className='search__item'>
                                <div className='search__info'>
                                    <div className='search__line'>
                                        <strong className='search__name'>{resp.nome}</strong>
                                        <span className='search__separator'> - </span>
                                        <span className='search__email'>{resp.email}</span>
                                    </div>
                                    <div className='search__line'>
                                        <span className='search__cpf'>{resp.cpf}</span>
                                        <span className='search__separator'> - </span>
                                        <span className='search__date'>Nascimento: {this.dateFormat(resp.data_nascimento)}</span>
                                    </div>
                                </div>
                                <div className='search__actions'>
                                    <Link to={`/novo?id=${resp.id}`}>
                                        <img src={AlterarIcon} alt='Alterar' />
                                    </Link>
                                    <button onClick={() => this.props.setDeleteID(resp.id)}>
                                        <img src={ExcluirIcon} alt='Excluir' />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                    { !this.props.records.length &&
                        <li key={1} className='search__item'>
                            <div className='search__info'>
                                <div className='search__line'>
                                    <strong className='search__name'>Não existe resultado para a consulta executada.</strong>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    records: state.Search.records,
    name: state.Search.name,
    email: state.Search.email,
    cpf: state.Search.cpf,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getResults, setDeleteID }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));
