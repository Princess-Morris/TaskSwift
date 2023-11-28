import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List>
        <ListItem>
        <NavLink to='/'>
            Dashboard
        </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to='/create'>
               New Task
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to='/prof'>
               Profile
            </NavLink>
        </ListItem>
    </List>
  );
}
