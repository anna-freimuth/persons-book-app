import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"

import albumsInitial, {setAlbumsToStorage} from '../data/albums'
import photosInitial, {setPhotosToStorage} from '../data/photos'

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
import {getPosts} from "../store/actions/posts";

export const GlobalContext = React.createContext(null)

const App = ({initPosts}) => {

    useEffect(()=>{
        initPosts()
    }, [])

    const [albums, setAlbums] = useState(albumsInitial)

    const addNewAlbum = formData => {
        const newAlbums = [...albums, {...formData, id: Date.now()}]
        setAlbums(newAlbums)
        setAlbumsToStorage(newAlbums)

    }

    const getAlbumById = id => {
        const idx = albums.findIndex(album => album.id === id)
        if (idx === -1) {
            return null
        }
        return albums[idx]
    }
    const [photos, setPhotos] = useState(photosInitial)

    const addNewPhoto = formData => {
        const newPhotos = [...photos, {...formData, id: Date.now(), like: 0, dislike: 0}]
        setPhotos(newPhotos)
        setPhotosToStorage(newPhotos)
    }



    // const doesPhotoBelongToActivePerson = (photo) => {
    //     const album = albums.find(album => album.id === photo.albumId);
    //     if (album === undefined) return false;
    //     return album.personId === activePerson;
    // }
    //
    // const likeRating = (id) => {
    //     const arr = [...photos]
    //     const photo = arr.find(photo => photo.id === id)
    //     if (photo !== undefined && !doesPhotoBelongToActivePerson(photo)) {
    //         photo.like += 1;
    //     }
    //     setPhotos(arr)
    //     setPhotosToStorage(arr)
    // }
    // const dislikeRating = (id) => {
    //     const arr = [...photos]
    //     const photo = arr.find(photo => photo.id === id)
    //     if (photo !== undefined && !doesPhotoBelongToActivePerson(photo)) {
    //         photo.dislike += 1;
    //     }
    //     setPhotos(arr)
    //     setPhotosToStorage(arr)
    // }

    const photoAction = (id, action) => {
        const newPhotos = [...photos]
        let idx = newPhotos.findIndex( p=>p.id === id)
        if (idx ===-1) return null
        newPhotos[idx][action]++
        setPhotos(newPhotos)
        setPhotosToStorage(newPhotos)
    }

    // const [posts, setPosts] = useState(postsInitial);
    //
    // const addNewPost = (formData) => {
    //     const newPosts = [...posts, {...formData, id: Date.now(), datetime: Date.now()}]
    //     setPosts(newPosts)
    //     setPostsToStorage(newPosts)
    // };


    return (
        <GlobalContext.Provider value={{
            albums,
            addNewAlbum,
            getAlbumById,
            photos,
            addNewPhoto,
            photoAction,
           // likeRating,
           // dislikeRating
            // posts,
            // addNewPost

        }}>
            <Navigation/>
            <Pages/>
        </GlobalContext.Provider>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        initPosts: () => dispatch(getPosts())
    }
}

export default connect(null, mapDispatchToProps)(App)
