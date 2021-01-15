import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from '../Components/Home/Home'
import Products from '../Components/Products/Products'
import Header from '../Components/common/Header/Header'
import Footer from '../Components/common/Footer/Footer'
import Login from "../Components/Auth/Login"
import Register from "../Components/Auth/Register"
import AdsBar from '../Components/common/Header/AdsBar'

const useStyles = makeStyles((theme) => ({
    
}));

function Pages() {
    const classes = useStyles()

    return (
        <Box>
            <Router>
                <AdsBar />
                <Header/>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/products"><Products /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/register"><Register /></Route>
                </Switch>
                <Footer />
            </Router>
        </Box>
    )
}

export default Pages
