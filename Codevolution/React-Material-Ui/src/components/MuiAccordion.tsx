import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MuiAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            exercitationem?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordion;
