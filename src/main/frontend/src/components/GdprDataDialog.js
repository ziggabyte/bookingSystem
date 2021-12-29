import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export default function GdprDataDialog({ onClose, open, userData }) {
    
    const { address, email, name, username } = userData

    const handleClose = () => {
        onClose()
    }
    
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>All data vi har sparat om dig:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Namn: {name}
                </DialogContentText>
                <DialogContentText>
                    Användarnamn: {username}
                </DialogContentText>
                <DialogContentText>
                    Email: {email}
                </DialogContentText>
                <DialogContentText>
                    Adress: {address}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Stäng
                </Button>
            </DialogActions>
        </Dialog>
    )
}