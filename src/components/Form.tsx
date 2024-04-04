import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <TextField id="firstName" label="First Name" variant='outlined' />
            
            </Box>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                autoComplete="off"
                >
                
                <TextField id="lastName" label="Last Name" variant='outlined' />
        </Box>

        
        </Box>


        
    )
}
