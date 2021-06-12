import "date-fns";
import moment from "moment";
import {React,useState} from 'react'
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

function Date() {
    const [selectedDate, setSelectedDate] = useState(moment());

  function handleDateChange(date) {
    setSelectedDate(date);
  }
    
    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <KeyboardDatePicker
          margin="normal"
          label="Date picker dialog"
          format="DD/MM/YYYY"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    )
}

export default Date
