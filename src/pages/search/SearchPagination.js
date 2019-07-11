import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getResults } from './actions';

class SearchPagination extends Component {
    setPage(number){
        this.props.getResults(this.props.name, this.props.email, this.props.cpf, (number - 1));
    }

    render() {

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.records_number / 10); i++) {
            pageNumbers.push(i);
        }

        return(
            <div className='search__pagination'>
                <ul className='search__pagination-list'>
                    {
                        pageNumbers.map(number => (
                            <li
                                key={number}
                                id={number}
                                onClick={() => this.setPage(number)}
                                className='search__pagination-item'
                            >
                                {number}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    records_number: state.Search.records_number,
    name: state.Search.name,
    email: state.Search.email,
    cpf: state.Search.cpf,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getResults }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPagination));
