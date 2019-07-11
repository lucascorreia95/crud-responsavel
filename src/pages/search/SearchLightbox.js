import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { deleteRecord, closeLightbox } from './actions';

class SearchLightbox extends Component {
    render() {
        return(
            <>
                { this.props.deleteId !== 0 &&
                    <div className='search__lightbox'>
                        <div className='search__lightbox-content'>
                            <div className='search__lightbox-msg'>
                                <span>Tem certeza que deseja excluir este registro?</span>
                            </div>
                            <div className='search__lightbox-actions'>
                                <button
                                    className='search__lightbox-item'
                                    onClick={() => this.props.deleteRecord(this.props.deleteId)}
                                >
                                    Sim
                                </button>
                                <button
                                    className='search__lightbox-item'
                                    onClick={() => this.props.closeLightbox()}
                                >
                                    Não
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = state => ({
    deleteId: state.Search.deleteId,
    name: state.Search.name,
    email: state.Search.email,
    cpf: state.Search.cpf,
});
const mapDispatchToProps = dispatch => bindActionCreators({ deleteRecord, closeLightbox }, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchLightbox));
