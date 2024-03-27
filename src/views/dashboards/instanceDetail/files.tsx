import { useState } from 'react'

import { Button, Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

import Icon from 'src/@core/components/icon'

import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

interface State {
  token: string
  showtoken: boolean
}

const Files = () => {
  const [values] = useState<State>({
    token: 'qqqqqq',
    showtoken: false
  })
  return (
    <Grid>
      <Card sx={{ position: 'relative', mb: 5 }} style={{ lineHeight: '1', height: 'auto' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ mr: 2, fontSize: '18px' }}>Files discoverer</Typography>
                <Box sx={{ m: 'auto' }}>
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      mr: 2,
                      backgroundColor: '#7367F029',
                      color: '#FFFFFF99',
                      '&:hover': {
                        backgroundColor: '#7367F029',
                        color: '#FFFFFF99'
                      }
                    }}
                  >
                    <Icon icon='tabler:file-upload' fontSize='1.2rem' style={{ marginRight: 2 }} />
                    Upload Files
                  </Button>

                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      backgroundColor: '#7367F0',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#7367F0',
                        color: '#FFFFFF'
                      }
                    }}
                  >
                    <Icon icon='tabler:file-download' fontSize='1.2rem' style={{ marginRight: 2 }} />
                    Zip & Download
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

        </CardContent>
      </Card>
    </Grid >
  )
}

export default Files
