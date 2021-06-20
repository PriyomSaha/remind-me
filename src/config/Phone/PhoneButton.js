import {React,useState} from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import {Button} from '@material-ui/core'
import PhoneDilog from './PhoneDilog'

function PhoneButton() {
    const [isPhoneDilogOpen, setisPhoneDilogOpen] = useState(false)
    return (
        <div style={{float:'center'}}>
            <br />
            <Button onClick={() => setisPhoneDilogOpen(!isPhoneDilogOpen)}
                variant="contained"
                color="default"
                startIcon={<PhoneIcon/>}
                fullWidth
            >
                Click To sign in
      
      </Button>
      <PhoneDilog isPhoneDilogOpen={isPhoneDilogOpen} setisPhoneDilogOpen={setisPhoneDilogOpen}/>
        </div>
    )
}

export default PhoneButton
