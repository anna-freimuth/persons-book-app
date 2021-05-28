import React, {Fragment, useContext, useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {GlobalContext} from "../App"

const PersonProfile = () => {

    const {id} = useParams()
    const {getPersonById, activePerson, editPerson} = useContext(GlobalContext)
    const [person, setPerson] = useState(null)
    const [editMode, setEditMode ] =useState(false)

    useEffect(() => {
        setPerson(getPersonById(id))
    }, []);

    const renderProfile = () => {
        if (!person) return false
        return (
            <div className="container">
                <div className="card w-25">
                    { editMode ? renderForm() : renderInfo() }
                </div>
                {renderEditButton()}
            </div>
        )
    }

    const changeFieldHandle = (event) => {
        setPerson({...person, [event.target.name]: event.target.value})
    }

    const renderForm = () => {
        return (
            <form onSubmit={submitFormHandle}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value={person.fName} name="fName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value={person.lName} name="lName" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={person.age} name="age" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" value={person.email} name="email" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" value={person.phone} name="phone" onChange={changeFieldHandle}/>
                </div>
                <div className="form-group mb-2">
                    <label>Avatar</label>
                    <input type="text" className="form-control" value={person.avatar} name="avatar" onChange={changeFieldHandle}/>
                </div>
                <button type="submit">Save Change</button>
            </form>
        )
    }

    const renderInfo = () => {
        return (
            <Fragment>
                <img src={person.avatar} className="card-img-top" alt="{person.fName} {person.lName}" />
                <div className="card-body">
                    <h3 className="card-title">
                        {person.fName} {person.lName}
                    </h3>
                    <div className="card-text">
                        <p>{person.age}</p>
                        <p>{person.phone}</p>
                        <p>{person.email}</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    const submitFormHandle = event => {
        event.preventDefault()
        editPerson(person)
        setEditMode(false)
    }

    const renderEditButton = () => {
        if ( activePerson !== person.id || editMode ) return null
        return (
            <div className="w-25">
                <button onClick={editButtonHandle} className="w-100 btn btn-success">Edit</button>
            </div>
        )
    }

    const editButtonHandle = event => {
        event.preventDefault()
        setEditMode(true)
    }

    return (
        <div>{renderProfile()}</div>
    )
}

export default PersonProfile