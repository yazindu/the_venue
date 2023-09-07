import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {SideDrawer} from "./SideDrawer.tsx";
import {useEffect, useState} from "react";


export const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [headerShow, setHeaderShow] = useState(false)

    const handleScroll = () => {
        console.log(window.scrollY) // Window is pretty much equal to the browser.
        if(window.scrollY > 0){
            setHeaderShow(true)
        } else {
            setHeaderShow(false)

        }
    }

    const toggleDrawer = (value: boolean) => {
        // setDrawerOpen((open) => !open)
        setDrawerOpen(value)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    },[])

    return (
        <AppBar
            position={'fixed'}
            style={{
                backgroundColor: headerShow ? '#2f2f2f': 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className={'header_logo'}>
                    <div className={'font_righteous header_logo_venue'}>The venue</div>
                    <div className={'header_logo_title'}>Musical Events</div>
                </div>
                <IconButton
                    area-label={'Menu'}
                    color={'inherit'}
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <SideDrawer open={drawerOpen} onClose={(value)=>toggleDrawer(value)}/>
            </Toolbar>
        </AppBar>
    )
}