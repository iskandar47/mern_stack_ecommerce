import React from 'react'
import { Container, TextField, Grid, Typography, Button } from '@material-ui/core'
import { useStyles } from "./styles"

function Register() {
    const classes = useStyles()
    return (
        <Container maxWidth={false} className={classes.container}>
            <Container maxWidth="xl">
                <Grid className={classes.form}>
                    <Typography variant="h2" color="secondary" align="center">Sing up</Typography>
                    <form>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                        <Button fullWidth size="large" variant="contained" color="secondary">Submit</Button>
                    </form>
                </Grid>
            </Container>
        </Container>
    )
}

export default Register
