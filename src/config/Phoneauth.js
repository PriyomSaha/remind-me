import { auth } from "./firebase";
import firebase from "./firebase";

export const sendOtp = (number) => {
  var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
  auth
    .signInWithPhoneNumber(number, recaptcha)
    .then(function (e) {
      alert("sent");
      return true;
    })
    .catch(function (error) {
      alert("error")
      return false;
    });
};
