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
      secondary: {
        main: '#e0e0e0',
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
