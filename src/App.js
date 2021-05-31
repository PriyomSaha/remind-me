import Header from "./components/Header";
import Add from "./components/Add";
import Week from "./components/pages/Week";
import Month from "./components/pages/Month";
import Year from "./components/pages/Year";

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./App.css";

function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
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
