import React from 'react'
import { Button, IconButton, Stack, Typography, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from 'react';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({
        formats,
    })
    const handleFormatsChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
    }
  return (
    <Stack>
        <Stack spacing={6} direction={'row'} marginBottom={'20px'}>
            <Button variant='text'>Text Button</Button>
            <Button variant='contained'>Contained Button</Button>
            <Button variant='outlined'>Outlined Button</Button>
        </Stack>

        <Stack spacing={4} direction={'row'} marginBottom={'20px'}>
            <Button variant='contained' color='secondary'>
                Secondary Button
            </Button>

            <Button variant='contained' color='primary'>
                Primary Button
            </Button>
            <Button variant='contained' color='warning'>
                Warning Button
            </Button>
            <Button variant='contained' color='error'>
                Error Button
            </Button>
            <Button variant='contained' color='success'>
                Success Button
            </Button>
            <Button variant='contained' color='info'>
                Info Button
            </Button>
        </Stack>

        <Stack spacing={4} direction={'row'} display={'flex'} marginBottom={'20px'}>

            Outlined variant:
            <Button variant='outlined' color='secondary'>
                Secondary Button
            </Button>

            <Button variant='outlined' color='primary'>
                Primary Button
            </Button>
            <Button variant='outlined' color='warning'>
                Warning Button
            </Button>
            <Button variant='outlined' color='error'>
                Error Button
            </Button>
            <Button variant='outlined' color='success'>
                Success Button
            </Button>
            <Button variant='outlined' color='info'>
                Info Button
            </Button>
        </Stack>

        <Stack spacing={4} direction={'row'} marginBottom={'20px'}>
            Text variant
            <Button variant='text' color='secondary'>
                Secondary Button
            </Button>

            <Button variant='text' color='primary'>
                Primary Button
            </Button>
            <Button variant='text' color='warning'>
                Warning Button
            </Button>
            <Button variant='text' color='error'>
                Error Button
            </Button>
            <Button variant='text' color='success'>
                Success Button
            </Button>
            <Button variant='text' color='info'>
                Info Button
            </Button>
        </Stack>
        <Stack display={'block'} spacing={3} direction={'row'} marginBottom={'20px'}>
            <Button variant='contained' size='small' color='error'>Small</Button>
            <Button variant='contained' size='medium' color='error'>Medium</Button>
            <Button variant='contained' size='large' color='error'>Large</Button>
        </Stack>


        <Typography variant='h3' gutterBottom>
            Material UI Icons
        </Typography> 

        <Stack display='block' spacing={3} direction='row' marginBottom='20px'>
            <Button variant='contained' startIcon={<SendIcon />}>
                Send
            </Button>

            <Button variant='contained' endIcon={<SendIcon />} disableElevation onClick={() => alert('clicked')}>
                Send
            </Button>

            <IconButton size='medium' aria-label='send' color='success'>
                <SendIcon />
            </IconButton>
        </Stack>

        <Stack display='block' spacing={3} direction='row' marginBottom='20px'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                <Button onClick={() => alert('This is left')}>Left</Button>
                <Button onClick={() => alert('This is center')}>Center</Button>
                <Button onClick={() => alert('This is right')}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack display='block' spacing={3} direction='row' marginBottom='20px'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatsChange} size='small'
                color='warning' exclusive>
                <ToggleButton value='bold' aria-label='bold'> 
                    <FormatBoldIcon /> 
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'> 
                    <FormatItalicIcon /> 
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'> 
                    <FormatUnderlinedIcon /> 
                </ToggleButton>

            </ToggleButtonGroup>
        </Stack>
    </Stack> 
  )
}
