import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import AppContext from '../AppContext/AppContext';
import {useContext, useState} from 'react';


const FormScreen = () => {

    // const [aut, setAut] = useState(false);

    const context = useContext(AppContext);

    const { CreatePost, AddPost, NewPost, AllPosts, isCreated } = context

    const [aut, setAut] = useState(false)

    // console.log(AllPosts);
    // console.log(AddPost);
    // console.log(NewPost);
    // console.log(AllPosts);

    
    const validate = Yup.object({
        title: Yup.string()
            .required("Title is required"),
        body: Yup.string()
            .required("Body is required"),
    })

    // function handleCreate () {
    //     setAut(false)
    // }
    
    
    // function handleReset () {
    //     setAut(true)
    // }



    return (
        <div className="container mt-5">
        <div className="col-md-4 mx-auto">
        <Formik
            initialValues={{
                title: '',
                body: '',
            }}
        
        validationSchema={validate}

        onSubmit={values => {

            // console.log(values.title);
            // console.log(values.body);
            // console.log("click")
            
            CreatePost(values);

            if (isCreated) {
                setAut(true); 
            }
            
        }}
        

        >

        
            {formik => (
                <div>
                    <h1 className="my-4.font-weight-bold-display-4 text-center"> New Post </h1>
                    
                    <Form>

                        <TextField label="Title" name="title" type="text" />
                        <TextField label="Body" name="body" type="text" />

                        <div className="d-flex justify-content-around">
                            <button className="btn btn-success mt-3 ml-3 p-2" type="submit" >Create</button>
                            <button className="btn btn-danger mt-3 ml-5 p-2" type="reset" >Clean</button>
                        </div> 

                    </Form>

                    {/* { AddPost && <label className="text-success mx-auto">  Post created successfully ! </label>} */}

                    

                </div>
            )}
        </Formik>

        { aut &&  <p className="text-success text-center mt-3"> Post Created ! </p>}   

        </div>
    </div>

    )
}

export default FormScreen
