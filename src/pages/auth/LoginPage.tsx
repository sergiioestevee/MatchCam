import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import GoogleIcon from '@mui/icons-material/Google'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import {
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import type { SyntheticEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  authMethods,
  type AuthMethod,
  type LoginFormValues,
  loginFormSchema,
} from '../../types/auth'

type AuthTab = 'login' | 'register'

export function LoginPage() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      method: 'email',
      identifier: '',
      password: '',
    },
  })
  const selectedMethod = useWatch({ control, name: 'method' })

  const onSubmit = (values: LoginFormValues) => {
    console.info('Login payload ready:', values)
  }

  const handleTabChange = (_event: SyntheticEvent, value: AuthTab) => {
    if (value === 'register') {
      navigate('/register')
    }
  }

  return (
    <Stack spacing={3}>
      <Card
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 460,
          p: { xs: 2.25, md: 3 },
          borderRadius: 3,
        }}
      >
        <Tabs value="login" onChange={handleTabChange} variant="fullWidth">
          <Tab label="Iniciar Sesión" value="login" />
          <Tab label="Registrarse" value="register" />
        </Tabs>

        <Box sx={{ mt: 2.5 }}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2.25}>
              <Controller
                name="method"
                control={control}
                render={({ field }) => (
                  <ToggleButtonGroup
                    exclusive
                    fullWidth
                    color="primary"
                    value={field.value}
                    onChange={(_event, nextMethod: AuthMethod | null) => {
                      if (nextMethod && authMethods.includes(nextMethod)) {
                        field.onChange(nextMethod)
                      }
                    }}
                    aria-label="Método de acceso"
                    sx={{
                      '& .MuiToggleButton-root': {
                        borderRadius: 1.5,
                        py: 1,
                        fontWeight: 700,
                      },
                    }}
                  >
                    <ToggleButton value="email">
                      <AlternateEmailRoundedIcon sx={{ mr: 1, fontSize: 20 }} />
                      Email
                    </ToggleButton>
                    <ToggleButton value="phone">
                      <PhoneRoundedIcon sx={{ mr: 1, fontSize: 20 }} />
                      Teléfono
                    </ToggleButton>
                  </ToggleButtonGroup>
                )}
              />

              <Controller
                name="identifier"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    autoComplete="username"
                    label={selectedMethod === 'phone' ? 'Teléfono' : 'Email'}
                    placeholder={
                      selectedMethod === 'phone' ? '+34600111222' : 'tu@email.com'
                    }
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message ?? ' '}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            {selectedMethod === 'phone' ? (
                              <PhoneRoundedIcon fontSize="small" />
                            ) : (
                              <AlternateEmailRoundedIcon fontSize="small" />
                            )}
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    autoComplete="current-password"
                    label="Contraseña"
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message ?? ' '}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockRoundedIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="text"
                  onClick={() => navigate('/register')}
                  sx={{
                    p: 0,
                    minWidth: 'auto',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </Box>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={<FavoriteBorderRoundedIcon />}
                sx={{
                  mt: 0.5,
                  py: 1.35,
                  borderRadius: 2,
                  boxShadow: '0 12px 24px rgba(255, 47, 128, 0.3)',
                  background:
                    'linear-gradient(120deg, rgba(255,47,128,1) 0%, rgba(255,67,135,1) 100%)',
                }}
              >
                Iniciar Sesión
              </Button>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Divider sx={{ flex: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  O continúa con
                </Typography>
                <Divider sx={{ flex: 1 }} />
              </Box>

              <Button
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                sx={{
                  py: 1.2,
                  borderRadius: 2,
                  borderColor: '#d6dae6',
                }}
              >
                Continuar con Google
              </Button>
            </Stack>
          </form>
        </Box>
      </Card>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: 'center' }}
      >
        Al continuar, aceptas nuestros términos de uso y política de privacidad.
      </Typography>
    </Stack>
  )
}
