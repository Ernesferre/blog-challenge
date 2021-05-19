import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';


const LoginScreen = ({ history }) => {

    const validate = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required"),
    })

    // const handleLogin = () => {
    //     history.replace('/')
    // }


    return (
        <div className="container mt-5">
            <div className="col-md-4 mx-auto">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}

            >
                {formik => (
                    <div>
                        <h1 className="my-4.font-weight-bold-display-4 text-center"> Login </h1>
                        
                        <Form>

                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <button className="btn btn-success mt-3 ml-3 " type="submit">Enter</button>
                            <button className="btn btn-danger mt-3 ml-5 " type="reset">Reset</button>

                        

                        </Form>
                    </div>
                )}
            </Formik>
            </div>
        </div>

                

                   
                
            
        
    )
}

export default LoginScreen
