import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

function MuiButtons() {
  const [formats, setFormats] = useState<string[]>([]);
  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

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
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Right</Button>
          <Button>Center</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="bold">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButtons;
