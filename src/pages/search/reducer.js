const INITIAL_STATE = {
    records: [],
    records_number: 0,
    name: '',
    email: '',
    cpf: '',
    deleteId: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RESULTS_FETCHED':
            return { 
                ...state, 
                records: action.payload.records,
                records_number: action.payload.records_number,
                name: action.nome,
                email: action.email,
                cpf: action.cpf,
            };
        case 'HANDLE_INPUT_CHANGE_nome':
            return { ...state, name: action.payload };
        case 'HANDLE_INPUT_CHANGE_email':
            return { ...state, email: action.payload };
        case 'HANDLE_INPUT_CHANGE_cpf':
            return { ...state, cpf: action.payload };
        case 'UPDATED_PAGE':
            return { ...state, page: action.payload };
        case 'DELETE_ID_FETCHED':
            return { ...state, deleteId: action.payload };
        case 'CLOSE_LIGHTBOX':
            return { ...state, deleteId: 0 };
        case 'RECORD_DELETED':
            const filtered = state.records.filter((value) => value.id !== action.payload);
            return {...state, deleteId: 0, records: filtered };
        default:
            return state;
    }
};
