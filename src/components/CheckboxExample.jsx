import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Save from '@mui/icons-material/Save';
function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={
                    <Checkbox
                        checked={checked}
                        color="secondary"
                        onChange={handleChange}
                        checkedIcon={<Save/>}

                    />} label="Label" />
                <FormControlLabel control={
                    <Checkbox />}
                        label="Disabled" />
            </FormGroup>
        </div>
    )
}

export default CheckboxExample