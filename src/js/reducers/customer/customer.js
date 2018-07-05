const defaultState = {
    data: {},
    mensaje: "",
    fetching: false,
    fetched: false,
    error: null
};

export default (state = defaultState, { type, payload, meta }) => {
    switch (type) {
        case 'TEST-ACTION':
            return { 
                ...state,
                mensaje: "Accion Exitosa",
            };
        default:
            return state;
    }
};