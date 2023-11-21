import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from "@mui/material";
import { useState } from "react";

function MuiDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            aria-labelledby="dialog-description"
          >
            Are you sure you want to submit the test? You will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MuiDialog;
