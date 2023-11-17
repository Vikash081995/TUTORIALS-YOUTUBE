import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup
} from "@mui/material";

import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function MuiCheckBox() {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills </FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="javascript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
