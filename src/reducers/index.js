import { ADD_REMINDER, DELETE_REMINDER, REMOVE_ALL } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = action => {
    return {
        lembrete: action.lembrete,
        id: Math.random(),
        data: action.data
    }
}

const deleteReminder = (action, state) => {
    const lembretes = state.filter(lembrete => lembrete.id !== action.id);
    bake_cookie('cookie-lembretes',lembretes);
    return lembretes;
}

const removeAll = () => {
    bake_cookie('cookie-lembretes', []);
    return [];
}

const reminders = (state =[], action) => {
    let reminders = null;
    state = read_cookie('cookie-lembretes');
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('cookie-lembretes', reminders);
            return reminders;

        case DELETE_REMINDER:
            return deleteReminder(action, state);
        
        case REMOVE_ALL:
            return removeAll();
        default:
            return state;
    }
}



export default reminders;