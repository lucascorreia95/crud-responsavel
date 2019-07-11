import Api from '../../service/api';

export const handleInputChange = event => ({
    type: `CREATE_INPUT_CHANGE_${event.target.id}`,
    payload: event.target.value,
});

export const create = async (nome, email, cpf, data_nascimento, id) => {
    let msg = '';

    if (id){
        await Api.put(`/responsaveis/${id}`, {
            cpf,
            email,
            nome,
            data_nascimento,
        })
            .then( (resp) => {
                msg = [{mensagem: 'Responsável alterado com sucesso!'}];
            })
            .catch( (error) => {
                msg = error.data;
            });
            
    } else {
        await Api.post('/responsaveis/', {
            cpf,
            email,
            nome,
            data_nascimento
        })
            .then(async resp => {
                msg = [{mensagem: 'Responsável cadastrado com sucesso!'}];
                const idNew = await getID(nome, email, cpf);
                window.location.href = `/novo?id=${idNew}`;
            })
            .catch( error => {
                msg = error.data;
            });
    }

    return {
        type: 'CREATE_RESPONSIBLE',
        payload: msg,
    };
};

export const load = async (id) => {
    const response = await Api.get(`/responsaveis/${id}`);
    
    let type = 'RESPONSIBLE_FETCHED';
    let payload = response.data;

    if(!payload) {
        type = 'RESPONSIBLE_NOT_FETCHED';
        payload= [{mensagem: 'Nenhum responsável foi encontrado.'}];
    }

    return{
        type,
        payload,
    };
};

async function getID(nome, email, cpf) {
    const response = await Api.post(`/responsaveis/find-all`, {
        cpf,
        email,
        nome,
    });

    return response.data.records[0].id;
}

export const clear = () => ({ type: 'CLEAR_FORM' });
