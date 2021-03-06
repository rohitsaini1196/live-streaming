import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Router from "./Router";
import { AuthProviderLocal } from "./context/AuthContext";
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
    <AuthProviderLocal>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Router />
        </div>
      </MuiThemeProvider>
    </AuthProviderLocal>
  );
}

export default App;
