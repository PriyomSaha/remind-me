import { React, useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, FormHelperText, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

function OTP(isdisabled) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const [otp, setotp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  useEffect(() => {
    refotp1.current.focus();
  }, [isdisabled]);
  // OTP box referances
  const refotp1 = useRef(null);
  const refotp2 = useRef(null);
  const refotp3 = useRef(null);
  const refotp4 = useRef(null);
  const refotp5 = useRef(null);
  const refotp6 = useRef(null);

  console.log(otp);
  return (
    <div className={classes.root}>
      <FormHelperText required>Enter OTP</FormHelperText>
      <Grid container spacing={2}>
        {/* OTP 1 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              console.log(e);
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp1: e.target.value });
                refotp2.current.focus();
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
            }}
            value={otp.otp1}
            inputRef={refotp1}
            autoFocus
          />
        </Grid>

        {/* OTP 2 */}
        <Grid item xs={2}>
          {console.log(counter)}
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) {
                setError(true);
              }
              // //Check for backspace
              // else if (e.target.value === "") {
              //   setotp({ ...otp, otp2: "" });
              //   refotp1.current.focus();
              // }
              else {
                setError(false);
                setotp({ ...otp, otp2: e.target.value });
                refotp3.current.focus();
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUpCapture: alert("key Up capture"),
              onkeyup: alert("On Key up"),
              onKeyDownCapture: alert("key down capture"),
              onkeydown: alert("On Key down"),
              onKeyPress: alert("On key press"),
            }}
            value={otp.otp2}
            inputRef={refotp2}
          />
        </Grid>

        {/* OTP 3 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp3: e.target.value });
                refotp4.current.focus();
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
            }}
            value={otp.otp3}
            inputRef={refotp3}
          />
        </Grid>

        {/* OTP 4 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp4: e.target.value });
                refotp5.current.focus();
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
            }}
            value={otp.otp4}
            inputRef={refotp4}
          />
        </Grid>

        {/* OTP 5 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp5: e.target.value });
                refotp6.current.focus();
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyPress: (e) => {
                const { key } = e;
                if (key === "Backspace") {
                  refotp4.current.focus();
                  setotp({ ...otp, otp5: "" });
                }
              },
            }}
            value={otp.otp5}
            inputRef={refotp5}
          />
        </Grid>

        {/* OTP 6 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp6: e.target.value });
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyPress: (e) => {
                const { key } = e;
                if (key === "Backspace") {
                  refotp5.current.focus();
                  setotp({ ...otp, otp6: "" });
                }
              },
            }}
            value={otp.otp6}
            inputRef={refotp6}
          />
        </Grid>
      </Grid>
      {error ? (
        <FormHelperText error={error}>Only digits</FormHelperText>
      ) : null}
      <Box pt={2} pb={3}>
        <Button color="primary" variant="contained" style={{ float: "right" }}>
          VERIFY
        </Button>
      </Box>
    </div>
  );
}

export default OTP;
