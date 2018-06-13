import { ADD_REMINDER, DELETE_REMINDER, REMOVE_ALL } from '../constants';

export const addLembrete = (lembrete,data) => {
    const action = {
        type: ADD_REMINDER,
        lembrete,
        data
    }

    return action;
}

export const removeLembrete = id => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    return action;
}

export const removeAll = () => {
    const action = {
        type: REMOVE_ALL
    }
    return action;
}