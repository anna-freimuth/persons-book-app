import React from "react"
import {connect} from "react-redux"
import PersonCard from "./PersonCard";

const Persons = ({persons}) => {


    const renderPersons = () => {
        if (!persons.length) {
            return (<div>There is no persons yet...</div>)
        }
        return persons.map(person => (<PersonCard key={person.id} person={person}/>))
    }

    return (
        <section className="container">
            <div className="row">
                {renderPersons()}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons.list
    }
}

export default connect(mapStateToProps, null)(Persons)
