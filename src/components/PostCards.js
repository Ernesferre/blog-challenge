import React from 'react'

const PostCards = ({ item }) => {
    return (
        <div className="card ms-3 mb-3 mt-5 d-flex flex-wrap bg-success p-2" style={ { maxWidth: 150 }}>
            
                    <div className="card-body">
                        
                        <p className="card-title text-center mt-3"> {item.title} </p> 
                        
                    </div>
            
                         

                    <div className="card-body text-center mb-3">               
                        <button 
                            className="btn btn-warning card-text text-center"
                            // onClick= {() => handleClick(img.id)}          
                            >Detalle
                        </button>
                    </div>    

            </div>
    )
}

export default PostCards
