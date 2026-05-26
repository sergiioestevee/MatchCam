import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded'
import { Box, Stack, Typography } from '@mui/material'

export function BrandMark() {
  return (
    <Stack spacing={1.25} sx={{ alignItems: 'center' }}>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          width: 64,
          height: 64,
          borderRadius: 2.5,
          color: 'common.white',
          background:
            'linear-gradient(140deg, rgba(255,47,128,1) 0%, rgba(255,90,146,1) 100%)',
          boxShadow: '0 14px 28px rgba(255, 45, 122, 0.25)',
        }}
      >
        <VideocamRoundedIcon sx={{ fontSize: 32 }} />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 0.1 }}>
        MatchCam
      </Typography>
    </Stack>
  )
}
