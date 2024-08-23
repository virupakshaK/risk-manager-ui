import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import DataTable from "./DataTable";
import Header from "./Header";

const MainPage = () => {


    return(
       <React.Fragment>
        <header>
          <Header />

        </header>
        <section>
           <Paper elevation={10} sx={{width: '100%', height: '100%', marginTop: '5%'}}>
            
            <Typography variant="h6" sx={{marginTop: '2%', pt:'20px'}}> Main content</Typography>
         

             
             <Grid container flexDirection={"column"} >
             <DataTable /> 
              
             </Grid>
           </Paper>

        </section>

      
        </React.Fragment>
    )


}


export default MainPage;