import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';

export const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2} >
            <TextField  label="Name" />
            <TextField  label="Name" variant='filled'/>
            <TextField  label="Name" variant='standard' size='small'/>
            <TextField  label="Name" variant='outlined' color='secondary' size='medium'/>
        </Stack>

        {/* Form Related Props */}
        <Stack direction={'row'} spacing={2} >
            <TextField label='Form input' required error />

            <TextField label='Password' required helperText='Please do not reveal your password to another' />

            <TextField label='Disabled' disabled />

        {/* To prevent the user from editing the textfield, use the readOnly prop */}
        <TextField label='Read only' InputProps={{ readOnly: true}} />
        </Stack>

        {/* To add Text before and after our texts in the form using inputAdornment Props 
            InputAdornment is used to add prefixes or suffixed to our TextField elements
            
            syntax, props = InputProps={{ startAdornment: <InputAdornment position='start'>sign or string or icon </InputAdornment>}}
        */}
        <Stack direction={'row'} spacing={2} >
            <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }} />

            <TextField label='Weigh' InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }} />
        </Stack>

        <p>Error props that toggles the error state example</p>

        <Stack direction={'row'} spacing={2} >

            {/* The helperText can be used to handle Errors from a form 
            
                Steps:
                1. Import useState to handle state values of the TextField
                2. Set the initial state value to be an empty string
                3. On the text field, add an onChange props to handle changes to the value of the textField
            
            
            
            */}
            <TextField 
                label='Password' 
                required 
                value={value} 
                onChange={(e) => setValue(e.target.value) } 
                error = {!value}
                helperText={!value ? 'This field is required' : "Do not share your password with others"}
            />



        </Stack>

    </Stack>
  )
}
