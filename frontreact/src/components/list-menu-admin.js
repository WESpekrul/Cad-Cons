import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/admin/transportadora">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Transportadora" />
    </ListItem>    
    <ListItem button component="a" href="/admin/condutor">
      <ListItemIcon>
        <NoteAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Condutores" />
    </ListItem>
    <ListItem button component="a" href="/admin/veiculo">
      <ListItemIcon>
        <NoteAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Veiculos" />
    </ListItem>
    <ListItem button component="a" href="/admin/configurar">
      <ListItemIcon>
        <NoteAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Configurações" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp/>
      </ListItemIcon>
      <ListItemText primary="Exit" />
    </ListItem>
  </div>
); 