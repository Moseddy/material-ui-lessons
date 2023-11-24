import React from 'react'
import { Box } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Box>
    <Box 
        component={'span'}
        sx={{
            backgroundColor:'error.main',
            color: 'gray',
            height: '100px',
            width: '100px',
            padding: '15px',
            '&:hover': {
                backgroundColor: 'primary.light',
                color: 'black',
            }
        }}
    >
        Code Evolutio

        </Box>

        <Box 
            display={'flex'}
            bgcolor={'primary.main'}
            width={'100px'}
            height={'100px'}
            p={3}    
        >Let them know</Box>
    
    </Box>
  )
}
