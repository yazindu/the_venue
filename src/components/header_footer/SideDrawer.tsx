import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemButton, ListItemText} from "@mui/material";

export const SideDrawer = () => {
    return (
        <Drawer
        anchor={'right'}
        open={true}
        >
            <List component={'nav'}>
                {/*<ListItembutton onClick={()=>alert('click')}>*/}
                <ListItem>
                    <ListItemButton onClick={()=>alert('click')}>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}