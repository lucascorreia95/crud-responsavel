import Api from '../../service/api';

export const getResults = async (nome, email, cpf, page) => {
    const currentPage = page || 0;

    const response = await Api.post(`/responsaveis/find-all?page=${currentPage}`, {
        cpf,
        email,
        nome,
    });

    return {
        type: 'RESULTS_FETCHED',
        payload: response.data,
        nome,
        email,
        cpf,
    };
};

export const handleInputChange = event => ({
    type: `HANDLE_INPUT_CHANGE_${event.target.id}`,
    payload: event.target.value
});

export const setDeleteID = id => ({
    type: 'DELETE_ID_FETCHED',
    payload: id,
});
    
export const deleteRecord = async id => {
    await Api.delete(`/responsaveis/${id}`);

    return {
        type: 'RECORD_DELETED',
        payload: id,
    };
};

export const closeLightbox = () => ({ type: 'CLOSE_LIGHTBOX' });
