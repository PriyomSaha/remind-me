import {React,useState} from 'react'
import Header from "./components/Header";
import Add from "./components/new reminder/Add Button";
import Week from "./components/pages/Week";
import Month from "./components/pages/Month";
import Year from "./components/pages/Year";
import Login from "./components/Beforelogin/Login";
import isUserin from "./config/UserContext"

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./App.css";
import {auth} from './config/firebase'


function App() {

const [isSignedin, setisSignedin] = useState()

 auth.onAuthStateChanged((user) => {
    if (user) {
      setisSignedin(true)
    } else {
      setisSignedin(false)
    }
  });
  

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#e0e0e0',
      }
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <isUserin.Provider value={{isSignedin, setisSignedin}}>
      <Header/>
      <Add/>
      <Login/>
      <Switch>
        <Route exact path="/week" component={Week}/>
        <Route exact path="/month" component={Month}/>
        <Route exact path="/year" component={Year}/>
      </Switch>
      </isUserin.Provider>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
