import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const[value, setValue] = useState<number | null>(null);
    console.log(value);
    const handleChange = (
        _event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }
  return (
    <Stack spacing={2}>
        <Rating 
            size='large' 
            value={value} 
            onChange={handleChange} 
            precision={0.5}
            icon={<FavoriteIcon fontSize='inherit' color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' color='error'/>}
            highlightSelectedOnly
        />
    </Stack>
  )
}
