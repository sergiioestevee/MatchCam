import { Box, Container, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { BrandMark } from '../components/auth/BrandMark'

export function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        px: 2,
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <BrandMark />
        <Typography
          variant="body1"
          sx={{
            mt: 1.5,
            mb: 4,
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          Encuentra tu match en videollamada
        </Typography>
        <Outlet />
      </Container>
    </Box>
  )
}
