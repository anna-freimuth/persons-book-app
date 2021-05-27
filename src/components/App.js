import React, {useState} from 'react'
import personsInitial, {setPersonsToStorage} from "../data/persons";
import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

export const GlobalContext = React.createContext(null)

const App = () => {

    const [persons, setPersons] = useState(personsInitial)

    const addPerson = data => {
        const newPersons = [...persons, {...data, id: Date.now()}]
        setPersons(newPersons)
        setPersonsToStorage(newPersons)
    }

    return (
        <GlobalContext.Provider value={{
            addPerson,
            persons
        }}>
            <Navigation />
            <Pages />
        </GlobalContext.Provider>
    )
}

export default App