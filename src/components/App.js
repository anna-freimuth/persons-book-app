import React, {useState} from 'react'
import personsInitial, {setPersonsToStorage, activePersonId, setActivePersonIdToStorage} from "../data/persons";
import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
import albumsInitial, {setAlbumsToStorage} from '../data/albums'
import photosInitial, {setPhotosToStorage} from '../data/photos'

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
        if (idx === -1) return false
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
        if (idx === -1) {
            return null
        }
        return persons[idx]
    }

    const [albums, setAlbums] = useState(albumsInitial)

    const addNewAlbum = formData => {
        const newAlbums = [...albums, {...formData, id: Date.now()}]
        setAlbums(newAlbums)
        setAlbumsToStorage(newAlbums)

    }

    const [photos, setPhotos] = useState(photosInitial)

    const addNewPhoto = formData => {
        const newPhotos = [...photos, {...formData, id: Date.now(), like: 0, dislike: 0}]
        setPhotos(newPhotos)
        setPhotosToStorage(newPhotos)
    }

    const doesPhotoBelongToActivePerson = (photo) => {
        const album = albums.find(album => album.id === photo.albumId);
        if (album === undefined) return false;
        return album.personId === activePerson;
    }

    const likeRating = (id) => {
        const arr = [...photos]
        const photo = arr.find(photo => photo.id === id)
        if (photo !== undefined && !doesPhotoBelongToActivePerson(photo)) {
            photo.like += 1;
        }
        setPhotos(arr)
        setPhotosToStorage(arr)
    }
    const dislikeRating = (id) => {
        const arr = [...photos]
        const photo = arr.find(photo => photo.id === id)
        if (photo !== undefined && !doesPhotoBelongToActivePerson(photo)) {
            photo.dislike += 1;
        }
        setPhotos(arr)
        setPhotosToStorage(arr)
    }


    return (
        <GlobalContext.Provider value={{
            addPerson,
            persons,
            getPersonById,
            activePerson,
            changeActivePerson,
            editPerson,
            albums,
            addNewAlbum,
            photos,
            addNewPhoto,
            likeRating,
            dislikeRating
        }}>
            <Navigation/>
            <Pages/>
        </GlobalContext.Provider>
    )
}

export default App
