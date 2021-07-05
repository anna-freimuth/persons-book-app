import React, {Fragment, useContext, useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {GlobalContext} from "../App"
import AddAlbum from "../albums/AddAlbum";
import PersonalAlbums from "../albums/PersonalAlbums";
import AddPost from "../posts/AddPost"
import PersonalBlog from "../posts/PersonalBlog"
import {editPerson, setPersonById} from "../../store/actions/persons";
import EditPersonForm from "./EditPersonForm";
import {CHANGE_ADD_POST, CHANGE_EDIT_MODE} from "../../store/typesList";


const PersonProfile = ({activePerson, editMode, setEditMode, setLocalPerson, person, addPostMode, setAddPostMode}) => {

    const {id} = useParams()
    const { addNewAlbum} = useContext(GlobalContext)
    const [addAlbum, setAddAlbum] = useState(false)

    useEffect(() => {
        setLocalPerson(+id)
    }, []);

    useEffect(() => {
        setLocalPerson(+id)
    }, [editMode]);

    const renderProfile = () => {
        if (!person || Object.keys(person).length === 0) return false
        return (
            <div className="container">
                <div className="card w-100">
                    {editMode ? renderForm() : renderInfo()}
                </div>
                {renderEditButton()}
            </div>
        )
    }

    const renderForm = () => {
        return (
            <EditPersonForm person={person} />
        )
    }

    const renderInfo = () => {
        return (
            <Fragment>
                <img src={person.avatar} className="card-img-top" alt={person.f_name + " " + person.l_name}/>
                <div className="card-body">
                    <h3 className="card-title">
                        {person.f_name} {person.l_name}
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


    const renderEditButton = () => {
        if (activePerson !== person.id || editMode || addAlbum || addPostMode) return null
        return (
            <div className="w-100">
                <button onClick={editButtonHandle} className="w-100 btn btn-success my-2">Edit</button>
                <button onClick={addAlbumButtonHandle} className="w-100 btn btn-info mb-2">Add Album</button>
                <button onClick={addPostButtonHandle} className="w-100 btn btn-info mb-2">Add Post</button>
            </div>
        )
    }

    const editButtonHandle = event => {
        event.preventDefault()
        setEditMode(true)
    }

    const addPostButtonHandle = event => {
        event.preventDefault()
        setAddPostMode()
    }

    const addAlbumButtonHandle = event => {
        event.preventDefault()
        setAddAlbum(true)
    }

    const addNewAlbumHandle = formData => {
        addNewAlbum(formData)
        setAddAlbum(false)
    }


    const renderPersonInfo = () => {
        if (addAlbum) {
            return (<AddAlbum onFinish={addNewAlbumHandle}/>)
        }
        if (addPostMode) {
            return <AddPost />;
        }
        if (editMode) {
            return null
        }
        return (<div>
            <PersonalAlbums personId={+id}/>
            <PersonalBlog personId={+id}/>
        </div>)

    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-6 col-sm-4">
                    {renderProfile()}
                </div>
                <div className="col-6 col-sm-8">
                    {renderPersonInfo()}
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = state => {
    return {
        activePerson: +state.persons.activePerson,
        person: state.persons.personById,
        editMode: state.persons.editMode,
        addPostMode: state.posts.addPostMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editLocalPerson: person => dispatch(editPerson(person)),
        setLocalPerson: id => dispatch(setPersonById(id)),
        setEditMode: () => dispatch({type: CHANGE_EDIT_MODE}),
        setAddPostMode: () => dispatch({type: CHANGE_ADD_POST})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonProfile)
