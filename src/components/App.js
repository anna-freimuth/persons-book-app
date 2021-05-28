import React, {useState} from 'react'
import personsInitial, {setPersonsToStorage,activePersonId,setActivePersonIdToStorage} from "../data/persons";
import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

export const GlobalContext = React.createContext(null)

const App = () => {

    const [persons, setPersons] = useState(personsInitial)
    const [activePerson, setActivePerson] = useState(+activePersonId)

    const addPerson = data => {
        const newPersons = [...persons, {...data, id: Date.now()}]
        setPersons(newPersons)
        setPersonsToStorage(newPersons)
    }
    const editPerson = person => {
        const newPersons = [...persons]
        const idx = newPersons.findIndex(p => p.id === person.id)
        if ( idx === -1 ) return false
        newPersons.splice(idx, 1, person)
        setPersons(newPersons)
        setPersonsToStorage(newPersons)
    }

    const changeActivePerson = id => {
        setActivePerson(+id)
        setActivePersonIdToStorage(+id)
    }

    const getPersonById = (id) => {
        const idx = persons.findIndex(person => person.id === +id)
        if ( idx === -1 ) {
            return null
        }
        return persons[idx]
    }

    return (
        <GlobalContext.Provider value={{
            addPerson,
            persons,
            getPersonById,
            activePerson,
            changeActivePerson,
            editPerson
        }}>
            <Navigation />
            <Pages />
        </GlobalContext.Provider>
    )
}

export default App