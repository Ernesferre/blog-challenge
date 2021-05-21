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
        <div className="container">
            <h1> Post Detail </h1>
            
                <p> User: {Post.userId} </p>
                <p> Id: {Post.id} </p>
                <p> Title: {Post.title} </p>
                <p> Body: {Post.body} </p>


        </div>

        <button className="btn btn-warning" onClick={handleReturn}> Go Back </button>
    </div>
    )
}

export default DetailScreen
