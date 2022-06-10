import React, { FC } from 'react'
import { Avatar, Box, Card, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { users } from './dataUsers';
import { QuestionAnswer } from '@material-ui/icons';

const UserItems: FC = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Card variant='outlined' sx={{ border: 'none', padding: 2, backgroundColor: '#f6f6f6' }}>
        {users.map(user => (
        <NavLink key={user._id} to={`/profile/${user._id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12 }}>
          <Box sx={{ position: 'relative', marginRight: 2 }}>
            <Avatar sx={{ width: 50, height: 50 }} src={user.avatar} alt="" />
            {user.isInNetwork && <Box sx={{ borderRadius: '50%', backgroundColor: '#4fb14f', width: 12, height: 12, position: 'absolute', bottom: 0, right: 0, border: '2px solid #f1f7fa' }}></Box>}
          </Box>
          <span>{user.name}</span>
        </NavLink>
         ))}
        <List>
          <ListItemButton onClick={() => navigate('/messages')}>
            <ListItemIcon sx={{minWidth: 36}}>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary='Сообщения' />
          </ListItemButton>
        </List>
      </Card>
    </Box >

  )
}

export default UserItems;