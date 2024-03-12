// ---- แก้ไขทำ Instant Detail ----

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

interface State {
  token: string
  showtoken: boolean
}

interface Storage {
  usestorage: string
}

const InstantDetail = () => {
  // ** States
  const [values] = useState<State>({
    token: 'qqqqqq',
    showtoken: false
  })

  const [storage, setstorage] = useState<Storage>({
    usestorage: ''
  })

  const handleStorageChange = (event: SelectChangeEvent) => {
    setstorage({ usestorage: event.target.value as string })
  }

  return (
    <Grid>
      <Card sx={{ position: 'relative', mb: 5 }} style={{ lineHeight: '1' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                <Icon icon='tabler:key' fontSize='1.2rem' />
              </CustomAvatar>
              <Box>
                <Typography variant='h5'>Access Link</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label='Access Link URL'
                    placeholder='https://ez-vps.co/instances/Ag8s744r2Lbs'
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label='Access Token'
                    value={values.token}
                    type={values.showtoken ? 'text' : 'password'}
                    disabled
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ position: 'relative' }} style={{ lineHeight: '1' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                <Icon icon='tabler:bucket' fontSize='1.2rem' />
              </CustomAvatar>
              <Box>
                <Typography variant='h5'>Storage Bucket</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                  <CustomTextField
                    select
                    fullWidth
                    id='form-layouts-separator-select'
                    value={storage.usestorage}
                    onChange={() => handleStorageChange}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <MenuItem
                      value='Storage1'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginBottom: 0,
                        width: '100%'
                      }}
                    >
                      <Icon icon='tabler:database' fontSize='1.2rem' style={{ marginRight: 2 }} />
                      Storage 1 : 2 / 50 GB{' '}
                      {storage.usestorage === 'Storage1' && (
                        <Typography
                          sx={{
                            color: '#28C76F',
                            backgroundColor: '#28C76F29',
                            width: '75px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px'
                          }}
                        >
                          Selected
                        </Typography>
                      )}
                    </MenuItem>
                    <MenuItem value='Storage2' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 2 : 10 / 50 GB
                      {storage.usestorage === 'Storage2' && (
                        <Typography
                          sx={{
                            color: '#28C76F',
                            backgroundColor: '#28C76F29',
                            width: '75px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px'
                          }}
                        >
                          Selected
                        </Typography>
                      )}
                    </MenuItem>
                    <MenuItem value='Storage3' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 3 : 5.3 / 50 GB
                      {storage.usestorage === 'Storage3' && (
                        <Typography
                          sx={{
                            color: '#28C76F',
                            backgroundColor: '#28C76F29',
                            width: '75px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px'
                          }}
                        >
                          Selected
                        </Typography>
                      )}
                    </MenuItem>
                    <MenuItem value='Storage4' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 4 : 49 / 50 GB
                      {storage.usestorage === 'Storage4' && (
                        <Typography
                          sx={{
                            color: '#28C76F',
                            backgroundColor: '#28C76F29',
                            width: '75px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px',
                            marginBottom: 2
                          }}
                        >
                          Selected
                        </Typography>
                      )}
                      <Typography
                        sx={{
                          color: '#FF9F43',
                          backgroundColor: '#FF9F4329',
                          width: '105px',
                          height: '24px',
                          borderRadius: '4px',
                          paddingY: '5px',
                          paddingX: '10px',
                          textAlign: 'center',
                          gap: '10px'
                        }}
                      >
                        Low Capacity
                      </Typography>
                    </MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default InstantDetail
