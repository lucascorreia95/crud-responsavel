import dateFns from 'date-fns';

const INITIAL_STATE = {
    name: '',
    email: '',
    cpf: '',
    date: '',
    title: 'Cadastro de responsáveis',
    button: 'Cadastrar',
    msg: [],
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESPONSIBLE_FETCHED':
            
            const date = action.payload.data_nascimento ? dateFns.format(new Date(action.payload.data_nascimento[0], (action.payload.data_nascimento[1]-1), action.payload.data_nascimento[2]), 'YYYY-MM-DD') : '';

            return { 
                ...state, 
                title: 'Alterar responsável',
                button: 'Alterar',
                name: action.payload.nome,
                email: action.payload.email,
                cpf: action.payload.cpf,
                date: date,
                id: action.payload.id,
            };

        case 'CREATE_INPUT_CHANGE_nome':
            return { ...state, name: action.payload };
        case 'CREATE_INPUT_CHANGE_email':
            return { ...state, email: action.payload };
        case 'CREATE_INPUT_CHANGE_cpf':
            return { ...state, cpf: action.payload };
        case 'CREATE_INPUT_CHANGE_date':
            return { ...state, date: action.payload };
        case 'CLEAR_FORM':
            return INITIAL_STATE;
        case 'CREATE_RESPONSIBLE':
            return { ...state, msg: action.payload };
        case 'RESPONSIBLE_NOT_FETCHED':
            return { ...state, msg: action.payload };
        default:
            return state;
    }
};
