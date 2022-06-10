import { QuestionAnswer } from '@material-ui/icons'
import { List, Card, ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material'
import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import { dataMenu } from './dataMenu'

const Menu:FC = () => {
  const navigate = useNavigate()

  return (
    <Card variant='outlined' sx={{ padding: 2, backgroundColor: '#f6f6f6', border: 'none', marginTop: 5, marginBottom: 5 }}>
      <List>
        {dataMenu.map(item => (
        <ListItem key={item.link} disablePadding>
          <ListItemButton onClick={() => navigate(item.link)}>
            <ListItemIcon sx={{minWidth: 36}}>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Card>
  )
}

export default Menu
