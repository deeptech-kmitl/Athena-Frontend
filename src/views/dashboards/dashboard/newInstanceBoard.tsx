
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TranslateIcon from '@mui/icons-material/Translate';
import { Button, CardActions, CardContent, Divider, Grid, MenuItem, Radio, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { IconBucket, IconCpu, IconSettings } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomAvatar from 'src/@core/components/mui/avatar';
import CustomTextField from 'src/@core/components/mui/text-field';
import { SimpleIconsTensorflow } from './TensorFlowIcon';
interface Storage {
  usestorage: string
}

const NewInstanceBoard = () => {
  const [stage, setStage] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');

  const storage = ['Storage 1', 'Storage 2', 'Storage 3', 'Storage 4', 'Storage 5']
  const router = useRouter()
  const planType = [{ name: 'NLPs', icon: <TranslateIcon fontSize='inherit' /> },
  { name: 'Machine Learning', icon: <IconCpu size={'14px'} /> },
  { name: 'Computer Vision', icon: <RemoveRedEyeIcon fontSize='inherit' /> },
  { name: 'AI Assistance', icon: <PersonSearchIcon fontSize='inherit' /> },
  { name: 'GPU Render', icon: <InsertPhotoIcon fontSize='inherit' /> }]

  const plan = [{ name: 'Empty Project', info: 'Just an empty JupyterNotebooks', icon: <IconSettings /> },
  { name: 'TensorFlow', info: 'open-source framework for machine learning', icon: <SimpleIconsTensorflow /> },
  { name: 'Stable Diffusion', info: 'generate images based on details written in text format', icon: <InsertPhotoIcon /> },]

  const size = [{ name: 'Nano', gpu: '1', cpu: '2', ram: '32', price: '1o', icon: <PeopleAltIcon fontSize='large' /> },
  { name: 'Micro', gpu: '2', cpu: '4', ram: '64', price: '25', icon: <PeopleAltIcon fontSize='large' /> },
  { name: 'Titan', gpu: '14', cpu: '32', ram: '256', price: '200', icon: <PeopleAltIcon fontSize='large' /> }]

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
                    <Button type='reset' onClick={() => {
                      router.push(`/dashboards`)
                    }} sx={{ mr: 2, display: 'flex', alignItems: 'center' }} color='secondary' variant='tonal'>
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
                            {planType.map((item, index) =>
                              <Button key={index} onClick={() => {
                                setSelectedType(item.name)
                              }} sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: selectedType === item.name ? 1 : 0,
                                borderRadius: '6px',
                                borderColor: '#8f85f3',
                                padding: '4px',
                                textTransform: 'none',
                              }}>
                                <Typography data-value="myValue" variant='h6'>
                                  {item.icon} {item.name}
                                </Typography>
                              </Button>
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12} >
                          <Grid container spacing={2}>
                            {plan.map((item, index) =>
                              <Grid item xs={4} md={4} key={index}>
                                <Button onClick={() => setSelectedPlan(item.name)} sx={{
                                  display: 'flex', alignItems: 'start', gap: '12px', border: 1,
                                  borderRadius: '6px',
                                  borderColor: selectedPlan === item.name ? '#8f85f3' : 'gray',
                                  width: '100%',
                                  minHeight: '100%',
                                }}>
                                  <Box>
                                    {item.icon}
                                  </Box>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'start' }}>
                                    <Typography variant='h5' sx={{ fontWeight: 700 }}>{item.name}</Typography>
                                    <Typography>{item.info}</Typography>
                                  </Box>
                                </Button>
                              </Grid>
                            )}

                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Typography>Choose Instance Size</Typography>
                          <Grid container spacing={2}>
                            {size.map((item, index) =>
                              <Grid item xs={4} md={4} >
                                <Button onClick={() => setSelectedSize(item.name)} sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  border: 1,
                                  borderRadius: '6px',
                                  borderColor: selectedSize === item.name ? '#8f85f3' : 'gray',
                                  width: '100%',
                                  minHeight: '100%',
                                }}>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', marginY: '8px' }}>
                                    <PeopleAltIcon fontSize='large' />
                                    <Typography>{item.name}</Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'start' }}>
                                    <Typography>{item.gpu} GPU Compute Unit</Typography>
                                    <Typography>{item.cpu} CPU Cores</Typography>
                                    <Typography>{item.ram} GB of RAM</Typography>
                                    <Typography>Mount Storage Bucket</Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', marginY: '8px' }}>
                                    <Typography>{item.price} Credits / Hour</Typography>
                                    <Radio
                                      checked={selectedSize === item.name}
                                      sx={{
                                        '.MuiSvgIcon-root': {
                                          fontSize: '1.5rem',
                                        },
                                        margin: 'auto'
                                      }}
                                    />
                                  </Box>
                                </Button>
                              </Grid>
                            )}


                            <Grid item xs={12} md={12}>
                              <Grid container sx={{ alignItems: 'center', mb: 7 }}>
                                <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                                  <IconBucket fontSize='1.2rem' />
                                </CustomAvatar>
                                <Typography variant='h5'>Storage Bucket</Typography>
                              </Grid>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <CustomTextField
                                    select
                                    fullWidth
                                    id='form-layouts-separator-select'
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center'
                                    }}
                                  >
                                    {storage.map((item) =>

                                      <MenuItem
                                        value={item}
                                        onClick={() => { setSelectedStorage(item) }}
                                        selected={item === selectedStorage}
                                        sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: 2,
                                          marginBottom: 0,
                                          width: '100%'
                                        }}
                                      >
                                        <IconBucket fontSize='1.2rem' />
                                        {item}{' '}
                                        {selectedStorage === item && (
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
                                      </MenuItem>)}

                                  </CustomTextField>
                                </Grid>
                              </Grid>
                            </Grid>




                          </Grid>
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
                        // setStage(stage + 1)
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
              <Box></Box>
            // <form onSubmit={e => e.preventDefault()}>
            //   <Box sx={{ display: 'flex', width: '100%' }}>
            //     <Box sx={{ flex: 3 }}>
            //       <CardContent>
            //         <Grid container spacing={5}>
            //           <Grid item xs={12}>
            //             <Typography variant='h4' sx={{ fontWeight: 600 }}>
            //               Instance Details
            //             </Typography>
            //             <Typography variant='h6'>
            //               Enter Your Instance Details.
            //             </Typography>
            //           </Grid>
            //           <Grid item xs={12} sm={6}>
            //             <CustomTextField fullWidth label='Name' placeholder='Give your instance a cute name' />
            //           </Grid>
            //           <Grid item xs={12} sm={6}>
            //             <CustomTextField fullWidth label='Description' placeholder='What will you do with this instance?' />
            //           </Grid>
            //         </Grid>
            //       </CardContent>
            //       <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
            //         <Button type='reset' sx={{ mr: 2, display: 'flex', alignItems: 'center' }} color='secondary' variant='tonal'>
            //           <CloseIcon /> Quit
            //         </Button>
            //         <Button type='submit' onClick={() => {
            //           setStage(stage + 1)
            //         }} variant='contained'>
            //           Next
            //           <ArrowForwardIcon />
            //         </Button>
            //       </CardActions>
            //     </Box>
            //     <Box sx={{ flex: 1 }}>
            //       <CardContent>
            //         <Box sx={{ display: 'flex', flexDirection: 'column', border: 1, borderRadius: '6px' }}>
            //           <Box sx={{ margin: '20px' }}>
            //             <Typography sx={{ mb: 4, fontWeight: 700 }}>Order Summary</Typography>
            //             <Typography sx={{ fontWeight: 700 }}>New Instance</Typography>
            //             <Typography>Name:</Typography>
            //             <Typography>Description:</Typography>
            //           </Box>
            //           <Divider sx={{ m: '0 !important' }} />
            //           <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
            //             <Typography sx={{ fontWeight: 700 }}>Credit Details</Typography>
            //             <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Available Credits <Typography component={'span'}>500</Typography></Typography>
            //             <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Cost <Typography component={'span'}>--</Typography></Typography>
            //           </Stack>
            //           <Divider sx={{ m: '0 !important' }} />
            //           <Stack spacing={{ xs: 1, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
            //             <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>Credits Left<Typography component={'span'}>500</Typography></Typography>
            //           </Stack>
            //         </Box>
            //       </CardContent>
            //       <CardActions>
            //         <Button type='submit' sx={{ width: '100%' }} variant='contained'>
            //           Place Order
            //         </Button>
            //       </CardActions>
            //     </Box>
            //   </Box>
            // </form>
          }

        </Card >
      </Grid >
    </Grid >
  )
}

export default NewInstanceBoard
