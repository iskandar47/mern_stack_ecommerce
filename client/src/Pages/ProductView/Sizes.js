import React from 'react'
import { Box, FormControlLabel, Checkbox, Typography } from "@material-ui/core"
import { useStyles } from "./styles"

function Sizes() {
    const classes = useStyles()

    return (
        <Box className={classes.sizes}>
            <FormControlLabel
            value="start"
            control={<Checkbox color="primary" size="small" />}
            label={<Typography variant="body2">S</Typography>}
            labelPlacement="start"
            />
            <FormControlLabel
            value="start"
            control={<Checkbox color="primary" size="small" />}
            label={<Typography variant="body2">M</Typography>}
            labelPlacement="start"
            />
            <FormControlLabel
            value="start"
            control={<Checkbox color="primary" size="small" />}
            label={<Typography variant="body2">L</Typography>}
            labelPlacement="start"
            />
            <FormControlLabel
            value="start"
            control={<Checkbox color="primary" size="small" />}
            label={<Typography variant="body2">XL</Typography>}
            labelPlacement="start"
            />
            <FormControlLabel
            value="start"
            control={<Checkbox color="primary" size="small" />}
            label={<Typography variant="body2">XXL</Typography>}
            labelPlacement="start"
            />
        </Box>
    )
}

export default Sizes
