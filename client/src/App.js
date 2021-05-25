import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Router from "./Router";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#23272a",
    },
    primary: {
      main: "#8d90f3",
    },
  },

  // typography:{
  //   fontFamily:[

  //   ]
  // }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Router />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
