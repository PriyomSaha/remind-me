import Header from "./components/Header";
import Add from "./components/new reminder/Add Button";
import Week from "./components/pages/Week";
import Month from "./components/pages/Month";
import Year from "./components/pages/Year";

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./App.css";


function App() {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      }
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header/>
      <Add/>
      <Switch>
        <Route exact path="/week" component={Week}/>
        <Route exact path="/month" component={Month}/>
        <Route exact path="/year" component={Year}/>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
