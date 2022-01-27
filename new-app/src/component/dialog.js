import * as React from 'react';
import '../App.css';
import { Dialog, Divider, Fab } from '@mui/material';
import { DialogContent,DialogTitle } from '@mui/material';
import {Add} from "@mui/icons-material"

  export default function FormDialog({children, title}){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen =() => {
        setOpen(true);
      };
      const handleClose =() => {
        setOpen(false);
      };
      return(
          <div>
              <Fab className="fab"
                onClick = {handleClickOpen}
                style={{backgroundColor: "#f1356d"}}>
                <Add style={{color: 'white'}} />
                </Fab>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{title}</DialogTitle>
                    <Divider />
                    <DialogContent>
                        {children}
                    </DialogContent>
                </Dialog>

            </div>
    
    );

  }