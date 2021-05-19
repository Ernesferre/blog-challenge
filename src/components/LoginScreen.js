import React from 'react'
import {useContext, useState, useEffect} from 'react';
import { Formik, Form } from 'formik';
import AppContext from '../AppContext/AppContext';
import TextField from './TextField';
import * as Yup from 'yup';
// import axios from 'axios';


const LoginScreen = ({ history }) => {

    const context = useContext(AppContext);

    const { login, autenticado, token } = context

    console.log(login);


    const validate = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required"),
    })

    const [aut, setAut] = useState(false);
    


    useEffect(() => {
        if (autenticado) {
            console.log(token)
            history.push('/')
        } 
    }, [autenticado])

    function handleReset () {
        setAut(false)
    }


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
                
                console.log(values);
                console.log("click")
                setAut(true);
                login(values)
                console.log(autenticado)
            }}
            

            >

            
                {formik => (
                    <div>
                        <h1 className="my-4.font-weight-bold-display-4 text-center"> Login </h1>
                        
                        <Form>

                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <button className="btn btn-success mt-3 ml-3 " type="submit">Enter</button>
                            <button className="btn btn-danger mt-3 ml-5 " type="reset" onClick={handleReset}>Reset</button>

                        

                        </Form>

                        { aut &&  <label className="text-danger mx-auto">  El Email igresado es incorrecto </label>}

                    </div>
                )}
            </Formik>
            </div>
        </div>

                

                   
                
            
        
    )
}

export default LoginScreen
