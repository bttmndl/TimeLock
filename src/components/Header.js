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
import { CryptoState } from "../CryptoContext";
import SideBar from './SideBar';
import Auth from './Authentication/Auth';

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

const Header = () => {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const {view, setView} = CryptoState();
  const navigate = useNavigate();
  console.log(view);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <SideBar/>
            <Typography
              onClick={() => navigate(`/`)}
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
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD $</MenuItem>
              <MenuItem value={"INR"}>INR ₹</MenuItem>
              <MenuItem value={"CAD"}>CAD $</MenuItem>
            </Select>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={view}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setView(e.target.value)}
            >
              <MenuItem value={"Grid"}>Grid</MenuItem>
              <MenuItem value={"List"}>List</MenuItem>
            </Select>
            <Auth />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;