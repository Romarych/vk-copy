import { Grid } from "@mui/material";
import { type } from "os";
import React, { FC, PropsWithChildren } from "react";
import Home from "../pages/home/Home";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

type Props = {}
const Layout: React.FC<PropsWithChildren<Props>> = ({children}) => {
    return (
        <>
            <Header />
            <Grid container spacing={2} marginX={5} marginTop={2}>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    <Home />
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default Layout;




