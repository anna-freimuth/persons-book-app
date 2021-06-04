import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddNewPerson from "../components/persons/AddNewPerson";
import Home from "../components/home/Home";
import Persons from "../components/persons/Persons";
import PersonProfile from "../components/persons/PersonProfile";
import Albums from "../components/albums/Albums";
import Album from "../components/albums/Album";


const Pages = () => {
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route exact={true} path="/persons">
                <Persons />
            </Route>
            <Route path="/persons/add">
                <AddNewPerson />
            </Route>
            <Route path="/persons/:id">
                <PersonProfile />
            </Route>
            <Route exact path="/albums">
                <Albums />
            </Route>
            <Route path="/albums/:id">
                <Album />
            </Route>
        </Switch>
    )
}

export default Pages