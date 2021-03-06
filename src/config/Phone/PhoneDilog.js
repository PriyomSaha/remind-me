import {
  Box,
  DialogContent,
  Dialog,
  TextField,
  InputAdornment,
  FormHelperText,
  Button,
  Collapse,
  Typography,
  Slide,
} from "@material-ui/core";
import { React, useState } from "react";
import OTP from "./OTP";
import { sendOtp } from "../Phoneauth";

function PhoneDilog({ isPhoneDilogOpen, setisPhoneDilogOpen }) {
  const [number, setNumber] = useState();
  const [error, setError] = useState(false);
  const [isdisabled, setisdisabled] = useState(false);

  const sendCode = async () => {
    const finalNumber = "+91" + number;
    await sendOtp(finalNumber);
    setisdisabled(!isdisabled);
  };

  return (
    <div>
      <Dialog
        open={isPhoneDilogOpen}
        onClose={() => {
          if (!isdisabled) {
            setisPhoneDilogOpen(!isPhoneDilogOpen);
          }
        }}>
        <DialogContent>
          <Box pb={2}>
            <Box pb={2}>
              <TextField
                autoFocus
                disabled={isdisabled}
                fullWidth
                required
                label="Enter Mobile Number"
                color="secondary"
                error={error}
                onChange={(e) => {
                  if (e.target.value.length > 10) setError(true);
                  else {
                    setError(false);
                    setNumber(e.target.value);
                  }
                }}
                inputProps={{
                  type: "number",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
                value={number}
              />
              {error ? (
                <FormHelperText error={error}>
                  Mobile number should be exact 10 digits
                </FormHelperText>
              ) : null}
            </Box>
            <Box pb={4}>
              <Button
                disabled={isdisabled}
                onClick={sendCode}
                color="primary"
                variant="contained"
                style={{ float: "right" }}>
                Get OTP
              </Button>
            </Box>
          </Box>
          <Box pb={2} maxWidth={300}>
            {isdisabled ? null : (
              <Slide direction="right" in unmountOnExit timeout={1000}>
                <Typography>
                  OTP box would be visible once OTP is generated
                </Typography>
              </Slide>
            )}
            <Collapse direction="right" in={isdisabled}>
              <OTP isdisabled={isdisabled} />
            </Collapse>
          </Box>
        </DialogContent>
      </Dialog>
      <div id="recaptcha"></div>
    </div>
  );
}

export default PhoneDilog;
