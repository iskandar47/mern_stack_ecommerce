import React from 'react'
import { Container, TextField, Grid, Typography, Button, Box } from '@material-ui/core'
import { useStyles } from "./styles"
import { Link } from "react-router-dom"

function Register() {
    const classes = useStyles()
    return (
        <Container maxWidth={false} className={classes.container}>
            <Container maxWidth="xl">
                <Grid className={classes.form}>
                    <Typography variant="h2" color="secondary" align="center">Sing up</Typography>
                    <Box className={classes.socialAccounts}> 
                        <Button 
                        variant="outlined"
                        endIcon={<img src="https://img.icons8.com/color/24/000000/google-logo.png"/>}>
                             Google 
                        </Button>
                        <Button 
                        variant="outlined"
                        endIcon={<img src="https://img.icons8.com/fluent/24/000000/facebook-new.png"/>}>
                             FacebooK
                        </Button>
                    </Box>

                        <Typography variant="body1" align="center" color="secondary">
                            <span>Or</span> 
                        </Typography>
                    
                    <form>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                        <Button fullWidth size="large" variant="contained" color="secondary">Sing up</Button>
                    </form>
                </Grid>
                <Typography align="center" variant="body2" color="secondary">
                    Already have an account ? 
                    <Link to="/login">Login</Link>
                </Typography>
            </Container>
        </Container>
    )
}

export default Register
