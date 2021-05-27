const personsArray = JSON.parse(localStorage.getItem('persons'));
export default personsArray || []

export const setPersonsToStorage = persons => localStorage.setItem('persons',JSON.stringify(persons))