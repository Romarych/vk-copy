import { TextField, Box, Alert } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import React, { FC, KeyboardEvent, useState } from 'react'
import { useAuth } from '../../providers/useAuth'



const AddPost: FC = () => {
    const [content, setContent] = useState<string>('')
    const { user, db } = useAuth()
    const [error, setError] = useState('')
    

    const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && user) {

            try {
                await addDoc(collection(db, "posts"), {
                    author: user,
                    content,
                    createdAt: '5 минут назад',
                });
            } catch (e: any) {
                setError(e)
            }
            
            setContent('')
        }
    }

    return (
        <>
            {error && <Alert sx={{ marginBottom: '20px' }} severity="error">{error}</Alert>}

            <Box sx={{
                border: '1px solid #ccc',
                borderRadius: "10px",
                padding: 2
            }}>

                <TextField
                    id="outlined-basic"
                    label="Добавить пост"
                    variant="outlined"
                    InputProps={{
                        sx: { borderRadius: '25px', bgcolor: '#f9f9f9' }
                    }}
                    sx={{ width: '100%', }}
                    onKeyPress={addPostHandler}
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
            </Box>
        </>
    )
}

export default AddPost