import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function BookedCleaningDialog({ serviceChoice, date, time, onClose, open }) {

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Du har bokat en städning!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Tack för din bokning av {serviceChoice} den {date} klockan {time}!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Gå till min sida
                </Button>
            </DialogActions>
        </Dialog>
    )
}