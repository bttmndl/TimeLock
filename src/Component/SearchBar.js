import React,{useContext} from 'react'
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { TextField,ThemeProvider,Container,createTheme, } from '@material-ui/core';
import { globalState } from './Context';

export default function SearchBar() {
    const {setText,setView} = useContext(globalState);
    
    const darkTheme = createTheme({
        palette: {
            primary: {
            main: "#fff",
            },
            type: "dark",
        },
    });
  return (
    <div style={{display:'flex', backgroundColor:'black'}}>
        <button style={{backgroundColor:'rgb(0,0,0)',}} onClick={()=>setView(view=>!view)}><ViewComfyIcon style={{color:'white',margin:25,marginLeft:80,}} /></button>
        <ThemeProvider theme={darkTheme}>
          <Container style={{ textAlign: "center", marginTop:10, marginBottom:10}}>
            <TextField
                label="Search your favrouite Crypto Currency.."
                variant="outlined"
                style={{ width: "100%",}}
                onChange={(e) => setText(e.target.value)}
            />
            
          </Container>
        </ThemeProvider>
    </div>
  )
}
