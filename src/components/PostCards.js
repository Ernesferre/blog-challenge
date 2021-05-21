import React from 'react'
import {useHistory} from "react-router-dom";
import AppContext from '../AppContext/AppContext';
import {useContext} from 'react';

const PostCards = ({ item }) => {

    const context = useContext(AppContext);

    const { find_OnePost, editPost, deletePost } = context

    const history = useHistory();

    const handleDetail = (id) => {
        console.log(id);
        find_OnePost(id);
        history.push("/detail")
    
    } 

    const handleEdit = (id) => {
        console.log(id);
        editPost(id);
        history.push("/edit")
    }

    const handleDelete = (id) => {
        console.log(id);
        deletePost(id);
    }




    return (

        



        <div className="card ms-3 mb-3 mt-5 d-flex flex-wrap p-2" style={ { maxWidth: 150 }}>
            
                        <div className="card-body">
                        
                             <p className="card-title text-center mt-3"> {item.title} </p> 
                        
                        </div>
            
                         
                        <div className="btn-group" role="group" >
                            <div className="card-body text-center">               
                                <button  
                                className="btn btn-warning btn-sm text-center mb-2"
                                onClick= {() => handleDetail(item.id)}          
                                >Post Details
                            </button>

                            <button 
                                className="btn btn-primary btn-sm text-center mb-2"
                                onClick= {() => handleEdit(item.id)}          
                                >Edit Post
                            </button>

                            <button 
                                className="btn btn-danger btn-sm text-center"
                                onClick= {() => handleDelete(item.id)}          
                                >Delete Post
                            </button>
                        </div>


                    </div>    

            </div>
    )
}

export default PostCards
