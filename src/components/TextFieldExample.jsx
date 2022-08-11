import React from 'react'
import { TextField } from '@mui/material'

function TextFieldExample() {
  


  return (
    <div>
        <TextField 
        type='text'
        variant='standard'
        color='primary'
        label="Standard" sx={{ input: { color: 'white' } }}
        />
    </div>
  )
}

export default TextFieldExample