import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

export const MuiSelect = () => {
    const [country, setCountry] = useState('');

    const [countries, setCountries] = useState<string[]>([]);
    console.log(country);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value as string);
    }
    console.log(countries);

    const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }


  return (
    <Box width={'250px'}>
        {/* To create an Mui Select component, we can either use the TextField component or use the Select component that MUI provides for us

            The TextField component is a wrapper of which the select is part of
            The MenuItem is synonymous with the options attribute in HTML

            Use useState to handle the state changes

            To make the select button the width of its container, use the fullwidth props in the TextField component
            

            NOTE:

            When writing functions in TypeScript, always indicate the type of input arguments and the types of return arguments of the function
        */}

        <TextField label='Select country' fullWidth select value={country} onChange={handleChange} >
            <MenuItem value='NG'>Nigeria</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='UK'>United Kingdom</MenuItem>
        </TextField>

        {/* For multiple select dropdown,

            use the SelectProps prop in the TextField and set multiple to true

            Next, convert the state to an array

        */}

        <TextField 
            label='Select country' 
            fullWidth 
            select 
            value={countries} 
            onChange={handleSelectChange}
            SelectProps={{
                multiple: true
            }}
            size='small'
            color='secondary'
            helperText='Please select your country'
        >

            <MenuItem value='NG'>Nigeria</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='UK'>United Kingdom</MenuItem>
        </TextField>


    </Box>
  )
}
