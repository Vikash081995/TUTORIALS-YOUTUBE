import { Stack, Link, Typography } from "@mui/material";

function MuiLinks() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLinks;
