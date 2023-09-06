import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {SideDrawer} from "./SideDrawer.tsx";


export const Header = () => {
    return (
        <AppBar
            position={'fixed'}
            style={{
                backgroundColor: '#2f2f2f',
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
                >
                    <MenuIcon/>
                </IconButton>
                <SideDrawer/>
            </Toolbar>
        </AppBar>
    )
}