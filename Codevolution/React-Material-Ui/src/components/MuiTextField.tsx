import { InputAdornment, Stack, TextField } from "@mui/material";

import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "required" : "Do Not share your passowrd with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
