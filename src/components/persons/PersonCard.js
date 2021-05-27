import React from "react"

const PersonCard = ({person}) => {
    const clickHandle = event => {
        event.preventDefault()
        console.log( person.id )
    }
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={person.avatar} className="card-img-top" alt="{person.fName} {person.lName}" />
                <div className="card-body">
                    <h5 className="card-title">{person.fName} {person.lName}</h5>
                    <a href="#" onClick={clickHandle} className="btn btn-primary">Open profile</a>
                </div>
            </div>
        </div>
    )
}

export default PersonCard