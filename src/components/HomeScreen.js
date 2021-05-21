import React from 'react'
import AppContext from '../AppContext/AppContext';
import {useContext} from 'react';
import PostCards from './PostCards';

const HomeScreen = () => {
    
    const context = useContext(AppContext);

    const { AllPosts } = context

    console.log(AllPosts);



    
    return (
        <div className="container">
            
            <h1 className="mt-3 text-center"> All Posts </h1>

            <div className="d-flex flex-wrap justify-content-center">   
                { 
                    ( AllPosts.map ( item  => (
                        <PostCards
                            key={item.id}
                            item={item}
                        />
                        ))
                    )
                }
                                

            </div>
        </div>
    )
}

export default HomeScreen
