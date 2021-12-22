import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";

export default function AssignCleanerDialog({ allCleaners, onClose, hasLoaded, selectedCleaner, open }) {
    const [cleaners, setCleaners] = useState(allCleaners)
    useEffect(() => setCleaners(allCleaners), [allCleaners])

    const handleClose = () => {
        onClose(selectedCleaner);
    };

    const handleListItemClick = (cleaner) => {
        onClose(cleaner);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Välj städare</DialogTitle>
           <List>
                {hasLoaded && cleaners.map((cleaner) => (
                    <ListItem button onClick={() => handleListItemClick(cleaner)}  key={cleaner.userId} >
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={cleaner.name}/>
                    </ListItem>
                ))} 
            </List>
        </Dialog>
    ) 

}