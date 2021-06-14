import {React,useContext} from 'react'
import { google_provider, auth } from './firebase'
import isUserin from "./UserContext"

function Google() {
const {setisSignedin} = useContext(isUserin)

    const gooleSignup = async ()=>{
      await auth.signInWithPopup(google_provider)
      setisSignedin(true)
    }
    return (
        <div style={{float:'center'}}>
             <br />
            <button style={{ marginTop: '2%', color:'white', background:'red'}} onClick={gooleSignup}>Google SignUp</button>
        </div>
    )
}

export default Google