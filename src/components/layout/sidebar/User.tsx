import { Avatar, Button, Card, Chip } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'

const User = () => {
    const { user, ga } = useAuth()
    return (
        <Card
            variant='outlined'
            sx={{
                border: 'none',
                padding: 2,
                backgroundColor: '#f6f6f6',
                borderRadius: 3,
                marginBottom: 5,
                textAlign: 'center'
            }}
        >
            <Chip
                avatar={<Avatar src={user?.avatar} />}
                label={user?.name || 'Без имени'}
                variant='outlined'
                sx={{ display: 'flex', marginBottom: 2 }}
            />
            <Button
                variant='outlined'
                onClick={() => {
                    signOut(ga)
                }}>Выйти</Button>
        </Card>

    )
}

export default User