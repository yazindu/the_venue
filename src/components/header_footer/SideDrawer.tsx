import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemButton} from "@mui/material";
import {scroller} from "react-scroll"

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

    const scrollToElement = (element: string) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -85
        })
        onClose(false)
    }

    const renderItem = (item: { where: string, value: string }) =>
        (<ListItem key={item.where}>
                <ListItemButton key={item.where} onClick={() => scrollToElement(item.where)}>
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
                {links.map(item => renderItem(item))}
            </List>
        </Drawer>
    )
}