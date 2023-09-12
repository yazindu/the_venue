import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemButton} from "@mui/material";

type SideDrawerProps = {
    open: boolean
    onClose: (value: boolean) => void
}

export const SideDrawer = ({open, onClose}: SideDrawerProps) => {
    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venueInfo', value: 'Venue NFO'},
        {where: 'highlights', value: 'Highlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location', value: 'Location'},
    ]

    const renderItem = (item: { where: string, value: string }) =>
        (<ListItem>
                <ListItemButton key={item.where} onClick={() => alert(item.where)}>
                    {/*<ListItemText primary="Inbox"/>*/}
                    {item.value}
                </ListItemButton>
            </ListItem>
        )


    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={() => onClose(false)}
        >
            <List component={'nav'}>
                {/*<ListItemButton onClick={()=>alert('click')}>*/}
                    {links.map(item => renderItem(item))}
            </List>
        </Drawer>
    )
}