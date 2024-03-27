
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, CardActions, CardContent, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import CustomTextField from 'src/@core/components/mui/text-field';
const NewInstanceBoard = () => {
  const [stage, setStage] = useState(1)
  const [value, setValue] = useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const [selected, setSelected] = useState('');

  const handleAlignment = (event, newAlignment) => {
    // Prevent unselecting all buttons by checking if newAlignment is not null
    if (newAlignment !== null) {
      setSelected(newAlignment);
    }
  };
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} >
        <Typography variant='h4' sx={{ display: 'flex', alignItems: 'center', color: '#8692D0' }}>
          My Instances
          <Box component="span" sx={{ mx: 1 }}> / </Box>
          <Box component="span" sx={{ color: '#cfd3ec' }}>New Instance</Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={
              <>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                  <Box sx={{ display: 'flex', gap: '12px' }}>
                    <Box sx={{ bgcolor: `${stage === 1 ? '#7367F0' : '#353756'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '6px' }}><Typography variant='h5'>1</Typography></Box>
                    <Box>
                      <Typography>Basic Information</Typography>
                      <Typography>Name/Description</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowForwardIosIcon />
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '12px' }}>
                    <Box sx={{ bgcolor: `${stage === 2 ? '#7367F0' : '#353756'}`, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '6px' }}><Typography variant='h5' sx={{ color: '#b7bee3' }}>2</Typography></Box>
                    <Box>
                      <Typography>Instance Plan</Typography>
                      <Typography>Instance Size/Type</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowForwardIosIcon />
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '12px' }}>
                    <Box sx={{ bgcolor: `${stage === 3 ? '#7367F0' : '#353756'}`, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '6px' }}><Typography variant='h5' sx={{ color: '#b7bee3' }}>3</Typography></Box>
                    <Box>
                      <Typography>Duration</Typography>
                      <Typography>Reservation Time</Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            }
            titleTypographyProps={{ sx: { mb: [2, 0] } }}
            sx={{
              py: 4,
              flexDirection: ['column', 'row'],
              '& .MuiCardHeader-action': { m: 0, flexDirection: ['column', 'row'], display: 'flex' },
              alignItems: ['flex-start', 'center']
            }}
          />
          <Divider sx={{ m: '0 !important' }} />

          {stage === 1 ?
            <form onSubmit={e => e.preventDefault()}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ flex: 3 }}>
                  <CardContent>
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <Typography variant='h4' sx={{ fontWeight: 600 }}>
                          Instance Details
                        </Typography>
                        <Typography variant='h6'>
                          Enter Your Instance Details.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='Name' placeholder='Give your instance a cute name' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='Description' placeholder='What will you do with this instance?' />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type='reset' sx={{ mr: 2, display: 'flex', alignItems: 'center' }} color='secondary' variant='tonal'>
                      <CloseIcon /> Quit
                    </Button>
                    <Button type='submit' onClick={() => {
                      setStage(stage + 1)
                    }} variant='contained'>
                      Next
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', border: 1, borderRadius: '6px' }}>
                      <Box sx={{ margin: '20px' }}>
                        <Typography sx={{ mb: 4, fontWeight: 700 }}>Order Summary</Typography>
                        <Typography sx={{ fontWeight: 700 }}>New Instance</Typography>
                        <Typography>Name:</Typography>
                        <Typography>Description:</Typography>
                      </Box>
                      <Divider sx={{ m: '0 !important' }} />
                      <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                        <Typography sx={{ fontWeight: 700 }}>Credit Details</Typography>
                        <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Available Credits <Typography component={'span'}>500</Typography></Typography>
                        <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Cost <Typography component={'span'}>--</Typography></Typography>
                      </Stack>
                      <Divider sx={{ m: '0 !important' }} />
                      <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Credits Left<Typography component={'span'}>500</Typography></Typography>
                      </Stack>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button type='submit' sx={{ width: '100%' }} variant='contained'>
                      Place Order
                    </Button>
                  </CardActions>
                </Box>
              </Box>
            </form> : stage === 2 ?
              <form onSubmit={e => e.preventDefault()}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                  <Box sx={{ flex: 3 }}>
                    <CardContent>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <Typography variant='h4' sx={{ fontWeight: 600 }}>
                            Instance Plan
                          </Typography>
                          <Typography variant='h6'>
                            Select Your Preferred Size and Template for the instance
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{ display: 'flex', gap: '6px' }}>
                            {/* <Typography variant='h6' sx={{ border: 1, borderRadius: '6px', borderColor: '#8f85f3', padding: '4px' }}>
                              NLPs
                            </Typography>
                            <Typography variant='h6' sx={{ border: 1, borderRadius: '6px', padding: '4px' }}>
                              Machine Learning
                            </Typography>
                            <Typography variant='h6' sx={{ border: 1, borderRadius: '6px', padding: '4px' }}>
                              Computer Vision
                            </Typography>
                            <Typography variant='h6' sx={{ border: 1, borderRadius: '6px', padding: '4px' }}>
                              AI Assistance
                            </Typography>
                            <Typography variant='h6' sx={{ border: 1, borderRadius: '6px', padding: '4px' }}>
                              GPU Render
                            </Typography> */}
                            <ToggleButtonGroup
                              value={selected}
                              exclusive
                              onChange={handleAlignment}
                              aria-label="text alignment"
                              sx={{
                                display: 'flex',
                                gap: '20px',
                                '& .MuiToggleButton-root': {
                                  border: 1,
                                  borderRadius: '12px', // Increasing the radius for visibility
                                  borderColor: 'rgba(143, 133, 243, 1)', // Ensuring full opacity for visibility
                                  padding: '6px 12px', // Adjusting padding for better visual
                                  '&.Mui-selected, &.Mui-selected:hover': {
                                    color: 'white',
                                    backgroundColor: 'rgba(143, 133, 243, 1)',
                                    borderColor: 'rgba(143, 133, 243, 1)',
                                  },
                                  '&:hover': {
                                    backgroundColor: 'rgba(143, 133, 243, 0.1)',
                                    borderColor: 'rgba(143, 133, 243, 1)', // Ensuring full opacity for visibility
                                  },
                                },
                              }}
                            >
                              <ToggleButton value="left">Left</ToggleButton>
                              <ToggleButton value="center">Center</ToggleButton>
                              <ToggleButton value="right">Right</ToggleButton>
                            </ToggleButtonGroup>

                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <CustomTextField fullWidth label='Description' placeholder='What will you do with this instance?' />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button onClick={() => {
                        setStage(stage - 1)
                      }} type='reset' sx={{ mr: 2, display: 'flex', alignItems: 'center' }} color='secondary' variant='tonal'>
                        <ArrowBackIcon /> Previous
                      </Button>
                      <Button type='submit' onClick={() => {
                        setStage(stage + 1)
                      }} variant='contained'>
                        Next
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', flexDirection: 'column', border: 1, borderRadius: '6px' }}>
                        <Box sx={{ margin: '20px' }}>
                          <Typography sx={{ mb: 4, fontWeight: 700 }}>Order Summary</Typography>
                          <Typography sx={{ fontWeight: 700 }}>New Instance</Typography>
                          <Typography>Name:</Typography>
                          <Typography>Description:</Typography>
                        </Box>
                        <Divider sx={{ m: '0 !important' }} />
                        <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                          <Typography sx={{ fontWeight: 700 }}>Credit Details</Typography>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Available Credits <Typography component={'span'}>500</Typography></Typography>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Cost <Typography component={'span'}>--</Typography></Typography>
                        </Stack>
                        <Divider sx={{ m: '0 !important' }} />
                        <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Credits Left<Typography component={'span'}>500</Typography></Typography>
                        </Stack>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button type='submit' sx={{ width: '100%' }} variant='contained'>
                        Place Order
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
              </form> :
              <form onSubmit={e => e.preventDefault()}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                  <Box sx={{ flex: 3 }}>
                    <CardContent>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <Typography variant='h4' sx={{ fontWeight: 600 }}>
                            Instance Details
                          </Typography>
                          <Typography variant='h6'>
                            Enter Your Instance Details.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <CustomTextField fullWidth label='Name' placeholder='Give your instance a cute name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <CustomTextField fullWidth label='Description' placeholder='What will you do with this instance?' />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button type='reset' sx={{ mr: 2, display: 'flex', alignItems: 'center' }} color='secondary' variant='tonal'>
                        <CloseIcon /> Quit
                      </Button>
                      <Button type='submit' onClick={() => {
                        setStage(stage + 1)
                      }} variant='contained'>
                        Next
                        <ArrowForwardIcon />
                      </Button>
                    </CardActions>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', flexDirection: 'column', border: 1, borderRadius: '6px' }}>
                        <Box sx={{ margin: '20px' }}>
                          <Typography sx={{ mb: 4, fontWeight: 700 }}>Order Summary</Typography>
                          <Typography sx={{ fontWeight: 700 }}>New Instance</Typography>
                          <Typography>Name:</Typography>
                          <Typography>Description:</Typography>
                        </Box>
                        <Divider sx={{ m: '0 !important' }} />
                        <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                          <Typography sx={{ fontWeight: 700 }}>Credit Details</Typography>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Available Credits <Typography component={'span'}>500</Typography></Typography>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Cost <Typography component={'span'}>--</Typography></Typography>
                        </Stack>
                        <Divider sx={{ m: '0 !important' }} />
                        <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Credits Left<Typography component={'span'}>500</Typography></Typography>
                        </Stack>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button type='submit' sx={{ width: '100%' }} variant='contained'>
                        Place Order
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
              </form>}

        </Card>
      </Grid>
    </Grid>
  )
}

export default NewInstanceBoard
