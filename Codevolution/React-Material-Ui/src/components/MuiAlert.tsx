import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is an Info alert</Alert>
      <Alert severity="success">This is a success alert</Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an Info alert
      </Alert>
      <Alert
        variant="outlined"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
