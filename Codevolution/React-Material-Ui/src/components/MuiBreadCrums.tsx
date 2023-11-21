import { Box, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function MuiBreadCrums() {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadCrums;
