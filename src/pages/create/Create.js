import React from 'react';

import CreateForm from './CreateForm';
import CreateMsg from './CreateMsg';

import './style.css';

function Create() {
    return(
        <div className='create'>
            <div className='create__container container'>
                <CreateForm />
                <CreateMsg />
            </div>
        </div>
    );
}

export default Create;