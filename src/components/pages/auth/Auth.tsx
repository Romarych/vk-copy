import { Alert, Button, ButtonGroup, Grid, TextField } from '@mui/material'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { IUserData } from './types'
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'

const Auth: FC = () => {
    const {ga, user} = useAuth()

    const [isRegForm, setIsRegForm] = useState(false)
    const [userData, setUserData] = useState<IUserData>({
        email: '',
        password: '',

    } as IUserData)

    const [error, setError] = useState('')

    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isRegForm) {
            try {
                const res = await createUserWithEmailAndPassword(
                    ga, 
                    userData.email, 
                    userData.password,
                )
                await updateProfile(res.user, {
                    displayName: userData.name
                })
            } catch (error: any) {
                error.message && setError(error.message)
            }
        } else {
            try {
                await signInWithEmailAndPassword(
                    ga, userData.email, userData.password)
            } catch (error: any) {
                error.message && setError(error.message)
            }
        }

        setUserData({
            email: '',
            password: '',
            name: '',
        })
    }

    const navigate = useNavigate()
    useEffect(() => {
        if(user) navigate('/')
    }, [user]) 

    return (
        <>
            {error && <Alert sx={{marginBottom: '20px'}} severity="error">{error}</Alert>}

            <Grid display='flex' justifyContent='center' alignItems='center'>
                <form style={{textAlign: 'center'}} onSubmit={handleLogin}>
                <TextField
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        label="Name"
                        variant="outlined"
                        value={userData.name}
                        sx={{ display: 'block', marginBottom: 3 }}
                    />
                    <TextField
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        type='email'
                        label="Email"
                        variant="outlined"
                        value={userData.email}
                        sx={{ display: 'block', marginBottom: 3 }}
                    />
                    <TextField
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        type='password'
                        label="Password"
                        variant="outlined"
                        value={userData.password}
                        sx={{ display: 'block', marginBottom: 3 }}
                    />
                    <ButtonGroup variant="contained" color="primary">
                        <Button type='submit' onClick={() => setIsRegForm(false)}>Auth</Button>
                        <Button type='submit' onClick={() => setIsRegForm(true)}>Register</Button>
                    </ButtonGroup>
                </form>
            </Grid>
        </>
    )
}

export default Auth