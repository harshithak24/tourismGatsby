import React, { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import './Layout.css'

const Layout = ({children})=>{
    return(
        <Fragment>
            <Navbar />
                { children }
            <Footer />
        </Fragment>
    )
}

export default Layout 
