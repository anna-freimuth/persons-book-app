import React from 'react'
import {useHistory} from 'react-router-dom'

const AlbumCard = ({album, photo}) => {


    let history = useHistory()

    const clickHandler = event => {
        event.preventDefault()
        history.push(`/albums/${album.id}`)
    }

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card cur-pointer" onClick={clickHandler}>
                <img src={photo.src} alt={album.title}/>
                <div className="card-body">
                    <h3 className="card-title">{album.title}</h3>
                    <p className="card-text">
                    { album.person ? `${album.person.l_name} ${album.person.f_name[0].toUpperCase()}` : "No Name" }</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
