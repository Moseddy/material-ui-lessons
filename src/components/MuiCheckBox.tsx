import React from 'react'
import { Box, FormControlLabel, Checkbox, FormLabel, FormControl, FormGroup,  } from '@mui/material';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const[acceptTnC, setAcceptTnC] = useState(false);
    console.log('acceptTnc', acceptTnC);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(e.target.checked);
    }

    const [skills, setSkills] = useState<string[]>([]);
    console.log(skills);
    const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(e.target.value);
        if(index === -1) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== e.target.value));
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
        </Box>

        {/* Use Icons as CheckBox */}
        <Box>
            <Checkbox 
                icon={<BookmarkBorderIcon />} 
                checkedIcon={<BookmarkIcon />} 
                checked={acceptTnC}
                onChange={handleChange}
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkills} />} />
                    <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkills} />} />
                    <FormControlLabel label='JavaScript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkills} />} />
                    <FormControlLabel label='Python' control={<Checkbox value='python' checked={skills.includes('python')} onChange={handleSkills} />} />

                </FormGroup>
            </FormControl>
        </Box>

    </Box>
  )
}
