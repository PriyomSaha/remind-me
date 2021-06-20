import AddAlertIcon from '@material-ui/icons/AddAlert';
import { InputAdornment,  TextField } from '@material-ui/core'
function NotificationText() {

    return (
        <div>
          <TextField
            label="Reminder"
            variant="standard"
            fullWidth
            color="secondary"
            multiline
            inputProps={{
              maxLength: 100
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"><AddAlertIcon/></InputAdornment>
              )              
            }}
          />
        </div>
    )
}

export default NotificationText
