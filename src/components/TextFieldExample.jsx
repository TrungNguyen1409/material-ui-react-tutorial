import React from 'react'
import { TextField } from '@mui/material'

function TextFieldExample() {
  


  return (
    <div>
        <TextField 
        type='date'
        variant='standard'
        color='primary'
        label="Standard" sx={{ input: { color: 'white' } }}
        />
    </div>
  )
}

export default TextFieldExample