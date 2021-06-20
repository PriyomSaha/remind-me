import {React,useContext,useState} from 'react'
import {Dialog,DialogContent,DialogTitle} from '@material-ui/core' 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import GoogleIcon from '@material-ui/icons/Google';
import Google from '../../config/Googleauth';
import Phoneauth from '../../config/Phone/PhoneButton'
import isUserin from "../../config/UserContext"

function Login() {
    const {isSignedin} = useContext(isUserin)
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderAuthButton = () => {
    if (value === 0) {
      return <Google/>
    } else {
      return <Phoneauth/>
    }
  }
    return (
        <Dialog open={!isSignedin}>
            <DialogTitle>Sign In / Sign Up </DialogTitle>
            <DialogContent dividers >
            <Tabs value={value} onChange={handleChange}>
                <Tab icon={<GoogleIcon />} label="Google" />    
                <Tab icon={<PhoneIcon />} label="OTP" />
            </Tabs>
            {renderAuthButton()}
            </DialogContent>
        </Dialog>
    )
}

export default Login
