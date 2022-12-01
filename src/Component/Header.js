import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const styles = {
  customToolbar : {
    minHeight: 30
  }
};


export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme} >
      <AppBar color="black" position="sticky">
        <Container>
          <Toolbar style={{minHeight: '50px'}}>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              className={classes.title}
            >
              TimeLock
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value ="currency"
              style={{ width: 100, height: 35, marginLeft: 15 }}
              
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}