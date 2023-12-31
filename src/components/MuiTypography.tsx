import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>
            Heading 1
        </Typography>
 
        <Typography variant='h2' component={'h1'} gutterBottom>
            Heading 2
        </Typography><Typography variant='h3'>
            Heading 3
        </Typography><Typography variant='h4'>
            Heading 4
        </Typography><Typography variant='h5'>
            Heading 5
        </Typography><Typography variant='h6'>
            Heading 6
        </Typography>
        <Typography variant='subtitle1'>
            Subtitle 1
        </Typography>
        <Typography variant='subtitle2'>
            Subtitle 2
        </Typography>
        <Typography variant='body1'>
            Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio mollitia exercitationem, tempora consectetur dolorem.
        </Typography>
    </div>
  )
}
