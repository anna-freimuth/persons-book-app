import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from "../App"

const AlbumCard = ({album, photo}) => {
    const {getPersonById} = useContext(GlobalContext)
    const person = getPersonById(album.personId)

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
                    <p className="card-text">{person.l_name} {person.f_name[0].toUpperCase()}.</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
