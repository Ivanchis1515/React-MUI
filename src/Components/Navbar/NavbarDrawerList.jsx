//importaciones de react
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const NavbarDrawerList = ({ArrayNavLinks, NavLink, setOpen}) => {
    return(
        <>
            <Box sx={{width:250}}>
                <nav>
                    <List>
                        {
                            ArrayNavLinks.map(item => (
                                <ListItem disablePadding key={item.title}>
                                    <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText>{item.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </nav>
            </Box>
        </>
    );
}
export default NavbarDrawerList;