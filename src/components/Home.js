import { Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccordionDash from "./AccordionDash";
import ProjectLists from "./ProjectLists";
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';


export default function Home(){
    return (
        <>
        <Box height={30}/>
        <Box sx={{display: "flex"}}>
        <Box component="main" sx={{flexGrow:1, p: 3}}>
       
        
         <Grid container spacing={2}>
            <Grid item xs={9}>
                <Card sx={{height: 85 + "vh"}}>
                    <CardContent>
                        <ProjectLists />
                    </CardContent>
                </Card>
            </Grid>
        <Grid item xs={3}>
        <Stack spacing={2} >
        <Card sx={{ maxWidth: 345 }}>
     
     <CardContent>
       <Typography gutterBottom variant="p" component="div">
         Workflow </Typography>
         <ClearOutlinedIcon />
         <UploadOutlinedIcon />
         <GetAppOutlinedIcon />
         <SaveOutlinedIcon />
         <EventRepeatOutlinedIcon />

       
       
     </CardContent>
     
     
   </Card>
   
        </Stack>
        <Grid sx={{ maxWidth: 345 }} >
            <Card sx={{height: 60 + "vh"}}>
                    <CardContent>
                        <AccordionDash />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Grid>
   
      
     
        </Box>
        </Box>
        </>
    )
}