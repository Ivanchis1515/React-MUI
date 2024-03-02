//importaciones de react
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const NavbarDrawerList = ({ArrayNavLinks, NavLink, setOpen}) => {
    return(
        <>
            <Box sx={{width:250}}>
                <nav>
                    <List sx={{ flexDirection: "column", padding: 0.5, width: "100%"}}>
                        {
                            ArrayNavLinks.map(item => (
                                <ListItem disablePadding key={item.title}>
                                    <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
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