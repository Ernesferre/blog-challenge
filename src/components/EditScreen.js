import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';



const EditScreen = () => {

    
    const validate = Yup.object({
        title: Yup.string()
            .required("Title is required"),
        body: Yup.string()
            .required("Body is required"),
    })

    // function handleEdit () {
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

            console.log(values.title);
            
            console.log(values.body);

            console.log("click")
            
            // CreatePost(values, AllPosts);
            
        }}
        

        >

        
            {formik => (
                <div>
                    <h1 className="my-4.font-weight-bold-display-4 text-center"> Edit Post </h1>
                    
                    <Form>

                        <TextField label="Title" name="title" type="text" />
                        <TextField label="Body" name="body" type="text" />

                        <div className="d-flex justify-content-around">
                            <button className="btn btn-success mt-3 ml-3 " type="submit" >Edit</button>
                            <button className="btn btn-danger mt-3 ml-5 " type="reset">Clean</button>
                        </div>
                        
                     

                    

                    </Form>

                    {/* { AddPost && <label className="text-success mx-auto">  Post created successfully ! </label>} */}

                    

                </div>
            )}
        </Formik>
        </div>
    </div>

    )
}

export default EditScreen
