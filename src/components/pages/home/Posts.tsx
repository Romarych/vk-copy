import { Alert, Avatar, ImageList, ImageListItem } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../../types'
import { useAuth } from '../../providers/useAuth'
import { collection, onSnapshot } from 'firebase/firestore'
import { initialPosts } from './initiallPost'
import Card from '../../ui/Card'


const Posts: FC = () => {
  const { db } = useAuth()
  const [posts, setPosts] = useState<IPost[]>(initialPosts)


  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), doc => {
      doc.forEach((d: any) => {
        setPosts(prev => [...prev, d.data()])
      })
      // const array: IPost[] = []
      // doc.forEach((d: any) => {
      //   array.push(d.data())
      // })
      // setPosts(array)
    })
    

    return () => {
      unsub()
    }

  }, [])

  return <>
    {posts.map((post, index) => (
      <Card key={`Post-${index}`}>
        <NavLink to={`/profile/${post.author._id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12 }}>
          <Box sx={{ position: 'relative', marginRight: 2 }}>
            <Avatar sx={{ width: 50, height: 50 }} src={post.author.avatar} alt="" />
          </Box>
          <div>
            <div style={{ fontSize: 14 }}>{post.author.name}</div>
            <div style={{ fontSize: 14, opacity: '0.6' }} >{post.createdAt}</div>
          </div>
        </NavLink>
        <p>{post.content}</p>
        {post.images?.length &&
          <ImageList variant='masonry' cols={3} gap={8}>
            {post.images?.map((image, index) => (
              <ImageListItem key={`Post-${index}`}>
                <img src={image} alt={image} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        }
      </Card>
    ))}
  </>
}

export default Posts