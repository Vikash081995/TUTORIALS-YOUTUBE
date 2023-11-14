import { Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MuiButtons() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="column">
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>
      <Stack spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          {" "}
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          {" "}
          Send
        </Button>
      </Stack>
    </Stack>
  );
}

export default MuiButtons;
