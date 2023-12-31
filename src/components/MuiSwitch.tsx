import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';


export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    console.log(checked);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }
  return (
    <Box>
        <FormControlLabel label={checked ? 'Light Mode' : 'Dark mode'} control={<Switch checked={checked} onChange={handleChange} size='small' color='success' />} />
    </Box>
  )
}
