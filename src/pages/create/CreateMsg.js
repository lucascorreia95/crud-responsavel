import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreateForm extends Component {
    render() {
        if (this.props.msg.length > 0){
            return(
                <div className='create__msg'>
                    <ul className='create__msg-list'>
                        {
                            this.props.msg.map((msg, index) => (
                                <li key={index} className='create__msg-item'>
                                    {msg.mensagem}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    msg: state.Create.msg
});
export default withRouter(connect(mapStateToProps, null)(CreateForm));