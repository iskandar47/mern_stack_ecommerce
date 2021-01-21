import React from 'react'
import { Grid, MenuItem, FormControl, InputLabel, Select, FormHelperText, Typography, Box } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import MinimizeIcon from '@material-ui/icons/Minimize'
import RemoveIcon from '@material-ui/icons/Remove';
import { useStyles } from './styles'

function OrderProps() {
    const classes = useStyles()
    const colors = ["red" , "yellow", "green", "blue", "orange"]
    const sizes = ["S", "M", "L", "XL", "XLL"]

    return (
        <Grid className={classes.props}>
            <Grid>
                <Typography variant="body2">Size :</Typography>
                <Box>
                    <FormControl size="small" variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            <Typography variant="body2">Age</Typography>
                        </InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        /* value={age}
                        onChange={handleChange} */
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid>
                <Typography variant="body2">Color :</Typography>
                <Box>
                    {/* {
                    colors.map(color => (
                        <FormControlLabel
                        key={color}
                        control={<Checkbox style={{color : `${color}`}} size="small" />}
                        />
                    ))
                    } */}
                    {/* <FormControl size="small" variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            <Typography variant="body2">Age</Typography>
                        </InputLabel>
                        <Select 
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl> */}
                    <FormControl className={classes.formControl}>
                        <Select
                        /* value={age}
                        onChange={handleChange}
                        
                        className={classes.selectEmpty} */
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="" disabled>
                            Placeholder
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        {/* <FormHelperText>Placeholder</FormHelperText> */}
                    </FormControl>
                </Box>
            </Grid>
            <Grid>
                <Typography variant="body2">Units :</Typography>
                <Box className={classes.addMin}>
                    <AddIcon color="primary"  fontSize="small"/>
                    <Typography variant="h5"> 1 </Typography>
                    <RemoveIcon color="primary" fontSize="small"/>
                </Box>
            </Grid>
            <Grid>
                <Typography variant="body2">Total :</Typography>
                <Box pl={1}></Box>
                <Typography variant="h5" color="primary">3800 DA</Typography>
            </Grid>
        </Grid>
    )
}

export default OrderProps
