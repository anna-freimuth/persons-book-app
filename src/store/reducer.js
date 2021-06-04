import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON, FETCH_PERSONS} from "./typesList";
import {setPersonsToStorage} from "../data/persons";

const stateInit = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false
    }
}
export const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case FETCH_PERSONS:
            return {
                ...state, persons: {...state.persons, ...action.payload}
            }
        case ADD_NEW_PERSON:

            const _arr = [...state.persons.list, {id: Date.now(), ...action.payload}]

            // temporary operation
            setPersonsToStorage(_arr)

            return {
                ...state,
                persons: {...state.persons, list: _arr}
            }

        case CHANGE_ACTIVE_PERSON:
            return {
                ...state,
                persons: {...state.persons, activePerson: action.payload}
            }

        default:
            return state
    }
}