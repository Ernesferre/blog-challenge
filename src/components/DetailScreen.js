import React from 'react';
import {useHistory} from "react-router-dom";
import AppContext from '../AppContext/AppContext';
import {useContext} from 'react';

const DetailScreen = () => {

    const context = useContext(AppContext);

    const { Post } = context

    console.log(Post);

    const history = useHistory();

function handleReturn () {
    history.push('/home');

}

    return (
    <div className="container">
        <h1 className="container text-center mt-2"> Post Detail </h1>

        <div className="container card">

            <ul className="list-group list-group-flush">
            
                <li className="list-group-item"> <b>User: </b> {Post.userId} </li>
                <li className="list-group-item"> <b>Id: </b> {Post.id} </li>
                <li className="list-group-item"> <b>Title: </b> {Post.title} </li>
                <li className="list-group-item"> <b>Body: </b> {Post.body} </li>

            </ul>


        </div>

        <button className="btn btn-warning mx-auto justify-content-center mt-2" onClick={handleReturn}> Go Back </button>
    </div>
    )
}

export default DetailScreen
