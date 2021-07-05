import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"

import albumsInitial, {setAlbumsToStorage} from '../data/albums'
import photosInitial, {setPhotosToStorage} from '../data/photos'

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
import {getPosts} from "../store/actions/posts";
import {getAlbums} from "../store/actions/albums";
import {getPhotos} from "../store/actions/photos";

export const GlobalContext = React.createContext(null)

const App = ({initPosts, initAlbums, initPhotos}) => {


    useEffect(() => {
        initPosts();
        initAlbums();
        initPhotos();
    }, []);


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


    // const [posts, setPosts] = useState(postsInitial);
    //
    // const addNewPost = (formData) => {
    //     const newPosts = [...posts, {...formData, id: Date.now(), datetime: Date.now()}]
    //     setPosts(newPosts)
    //     setPostsToStorage(newPosts)
    // };


    return (
        <div>
            <Navigation/>
            <Pages/>
        </div>);
}


const mapDispatchToProps = dispatch => {
    return {
        initPosts: () => dispatch(getPosts()),
        initAlbums: () => dispatch(getAlbums()),
        initPhotos: () => dispatch(getPhotos())
    }
}

export default connect(null, mapDispatchToProps)(App)
