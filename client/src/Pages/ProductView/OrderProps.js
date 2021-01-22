import React from 'react'
import { Grid, Checkbox, Typography, Box, FormControlLabel } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';
import DropDown from "../../Components/Filter/DropDown"
import { useStyles } from './styles'

function OrderProps() {
    const classes = useStyles()
    const colors = ["red" , "yellow", "green", "blue", "orange"]
    const sizes = ["S", "M", "L", "XL", "XLL"]

    return (
        <Grid className={classes.props}>
            <Grid>
                <Typography variant="subtitle2" color="secondary">Select size :</Typography>
                <Box>
                    {
                        sizes.map(size=>(
                            <FormControlLabel
                            key={size}
                                control={
                                <Checkbox
                                    size="small"
                                    /* checked={state.checkedB}
                                    onChange={handleChange} */
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label={<Typography variant="subtitle2">{size}</Typography>}
                            />
                        ))
                    }
                </Box>
            </Grid>
            <Grid>
                <Box className={classes.colorsDrop}>
                    <DropDown variant="subtitle2" listName="Color" listItems={colors} />
                </Box>
            </Grid>
            <Grid className={classes.total}>
                <Grid>
                    <Typography variant="subtitle2">Units :</Typography>
                    <Box className={classes.addMin}>
                        <AddIcon color="primary"  fontSize="small"/>
                        <Typography variant="subtitle2"> 1 </Typography>
                        <RemoveIcon color="primary" fontSize="small"/>
                    </Box>
                </Grid>
                <Grid>
                    <Typography variant="subtitle2">Total :</Typography>
                    <Box pl={1}></Box>
                    <Typography variant="subtitle2" color="primary">3800 DA</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OrderProps
