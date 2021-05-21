import React from 'react'
import {useContext, useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import { Formik, Form } from 'formik';
import AppContext from '../AppContext/AppContext';
import TextField from './TextField';
import * as Yup from 'yup';



const LoginScreen = () => {

    const context = useContext(AppContext);

    const { login, autenticado, token } = context

    // console.log(login);

    const history = useHistory();
    


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                login(values)

                if (!autenticado) {
                    setAut(true); 
                }
                
            }}
            

            >

            
                {formik => (
                    <div>
                        <h1 className="my-4.font-weight-bold-display-4 text-center "> Login </h1>
                        
                        <Form>

                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />

                            <div className="d-flex justify-content-around">
                                <button className="btn btn-success mt-3 ml-3 p-2 " type="submit">Enter</button>
                                <button className="btn btn-danger mt-3 ml-5 p-2" type="reset" onClick={handleReset}>Reset</button>
                            </div>
                        
                            { aut &&  <label className="text-danger text center mx-auto">  Los datos igresados son incorrectos </label>}

                        </Form>

                        

                    </div>
                )}
            </Formik>
            </div>
        </div>

                

                   
                
            
        
    )
}

export default LoginScreen
