import { React, useContext } from "react";
import { google_provider, auth } from "./firebase"; 
import isUserin from "./UserContext";
import { Button } from "@material-ui/core";
import GoogleIcon from "@material-ui/icons/Google";

function Google() {
  const { setisSignedin } = useContext(isUserin);

  const gooleSignup = async () => {
    await auth.signInWithPopup(google_provider);
    setisSignedin(true);
  };
  return (
    <div style={{ float: "center" }}>
      <br />
      <Button
        onClick={gooleSignup}
        variant="contained"
        color="default"
        startIcon={<GoogleIcon />}
        fullWidth>
        Click To sign in
      </Button>
    </div>
  );
}

export default Google;
