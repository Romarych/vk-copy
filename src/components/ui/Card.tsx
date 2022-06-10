import { Box } from '@mui/system'
import React, { PropsWithChildren } from 'react'

type Props = {};
const Card: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <Box
    sx={{
      border: '1px solid #e2e2e2',
      borderRadius: '10px',
      padding: 2,
      marginTop: 5
    }}
    >
        {children}
    </Box>
  )
}

export default Card