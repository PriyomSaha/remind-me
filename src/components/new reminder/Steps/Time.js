import "date-fns";
import moment from "moment";
import {React,useState} from 'react'
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';

function Time() {
    const [selectedTime, setSelectedTime] = useState(moment());

  function handleTimeChange(time) {
    setSelectedTime(time);
  }
    
    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
         <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedTime}
          onChange={handleTimeChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </MuiPickersUtilsProvider>
    )
}

export default Time
