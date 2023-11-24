import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';



type Skill = {
    id: number,
    label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));
export const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    console.log(value);
    console.log(skill);
    const handleChange = (e: any, newValue: string | null) => {
        setValue(newValue);
    }

    const handleSkill = (e: any, newValue: Skill | null) => {
        setSkill(newValue);
    }
  return (
    <Stack spacing={3} width={'250px'}>
        <Autocomplete 
            options={skills} 
            renderInput={(params) => 
            <TextField {...params } 
            label='Skills' />} 
            value={value}
            onChange={handleChange}
            freeSolo
        />

        {/* Using the autocomplete as to receive an object or an array */}

        <Autocomplete 
            options={skillOptions} 
            renderInput={(params) => 
            <TextField {...params } 
            label='Skills' />}
            value={skill}
            onChange={handleSkill}
        />

    </Stack>
  )
}
