import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON} from "./typesList";
import {store} from "./store";
import {setActivePersonIdToStorage} from "../data/persons";

// export const addPersons = person => {
//     person.id = Date.now()
//     store.dispatch({type: ADD_NEW_PERSON, person})
// }

export const changeActivePersonId = personId => {
    return dispatch => {
        try{
            setActivePersonIdToStorage(personId)
            dispatch(setActivePerson(personId))
        }
      catch (err){
            console.log(err.message)
      }
    }
}

const setActivePerson = personId =>{
    return {
        type:CHANGE_ACTIVE_PERSON,
        payload : personId
    }
}