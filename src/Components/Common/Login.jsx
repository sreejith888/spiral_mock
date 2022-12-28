import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginLogic from './Login/LoginLogic'

const Login = () => {
 const navigate=useNavigate();
    const { values,
        updateValues,
        handleValidation,
        validateFiled,
        validationFormError}=LoginLogic();
const onSubmit=()=>{
    if(!handleValidation()){
        return
    }
    try{
const result = authenticate(values.txtLoginId,values.txtPassword,"SPIRAL");
if(result.responseCode===1)
    }
    catch{

    }
}

    return (
        <div className='main'>
            <div className='form_container' >
                <input className='form_input' name='txtCompanyId' type="text" placeholder="SPIRAL" defaultValue="SPIRAL" />
                <input 
                className='form_input' 
                name='txtLoginId' 
                type="text"
                value={values.txtLoginId}
                onChange={(e)=>updateValues(e.target.name,e.target.value)}
                placeholder="Login ID"
                />
                {validationFormError["txtLoginId"]}
                <input 
                className='form_input' 
                name='txtPassword' 
                type="text"
                value={values.txtPassword}
                onChange={(e)=>updateValues(e.target.name,e.target.value)}
                placeholder="password"
                />
                {validationFormError["txtPassword"]}
                <button type='submit' onClick={()=>onSubmit()} >Login</button>
            </div>
        </div>
    )
}

export default Login