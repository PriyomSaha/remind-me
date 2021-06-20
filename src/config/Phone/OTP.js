import { React, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, FormHelperText, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function OTP() {
  const classes = useStyles();
  const [error, setError] = useState(false);

  const [otp, setotp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  // OTP box referances
  const refotp2 = useRef(null);
  const refotp3 = useRef(null);
  const refotp4 = useRef(null);
  const refotp5 = useRef(null);
  const refotp6 = useRef(null);

  return (
    <div className={classes.root}>
      <FormHelperText required>Enter OTP</FormHelperText>
      <Grid container spacing={2}>
        {/* OTP 1 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp1: e.target.value });
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUp: (e) => {
                const { key } = e;
                if (!isNaN(key)) {
                  refotp2.current.focus();
                }
              },
            }}
            autoFocus
            value={otp.otp1}
          />
        </Grid>

        {/* OTP 2 */}
        <Grid item xs={2}>
          <TextField
            onChange={(e) => {
              if (isNaN(e.target.value)) setError(true);
              else {
                setError(false);
                setotp({ ...otp, otp2: e.target.value });
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUp: (e) => {
                const { key } = e;
                if (!isNaN(key)) {
                  refotp3.current.focus();
                }
              },
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
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUp: (e) => {
                const { key } = e;
                if (!isNaN(key)) {
                  refotp4.current.focus();
                }
              },
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
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUp: (e) => {
                const { key } = e;
                if (!isNaN(key)) {
                  refotp5.current.focus();
                }
              },
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
              }
            }}
            color="secondary"
            inputProps={{
              maxLength: 1,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              style: { textAlign: "center" },
              onKeyUp: (e) => {
                const { key } = e;
                if (!isNaN(key)) {
                  refotp6.current.focus();
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
