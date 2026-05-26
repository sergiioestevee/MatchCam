import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import { Button, Card, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export function RegisterPage() {
  return (
    <Card
      sx={{
        mx: 'auto',
        width: '100%',
        maxWidth: 460,
        p: { xs: 2.25, md: 3 },
        borderRadius: 3,
      }}
    >
      <Stack spacing={2.5} sx={{ textAlign: 'center' }}>
        <PersonAddAltRoundedIcon color="primary" sx={{ fontSize: 38, mx: 'auto' }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Registro en construcción
        </Typography>
        <Typography color="text.secondary">
          Hemos dejado la ruta preparada para que podamos construir el alta en la
          siguiente iteración.
        </Typography>
        <Button
          component={RouterLink}
          to="/login"
          variant="outlined"
          startIcon={<ArrowBackRoundedIcon />}
        >
          Volver al login
        </Button>
      </Stack>
    </Card>
  )
}
