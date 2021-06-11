import React from 'react'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { InputAdornment,  TextField } from '@material-ui/core'
function NotificationText() {
    return (
        <div>
            <TextField label="Reminder" variant="outlined" fullWidth color="secondary" multiline rowsMax="3" 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <AddAlertIcon/>
                  </InputAdornment>
                ),
            }}
            inputProps={{
                maxLength:100,
              }}/>
        </div>
    )
}

export default NotificationText
