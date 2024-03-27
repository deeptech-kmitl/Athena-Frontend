import * as React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

import FileIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import Files from 'src/views/dashboards/instanceDetail/files';

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}



function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple=tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function allyProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

const InstanceDetail = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    interface DataItem {
        id: string
        name: string
        status: number
        author: string
        createdAt: string
        endDate: string
        size: string
        type: string
        server: string
        location: string
    }
    const data: DataItem[] = [{
        id: "JU-30",
        name: 'hello world',
        status: 1,
        author: 'me',
        createdAt: '20 February 2024',
        endDate: '20 February 2024',
        size: 'Nano',
        type: 'Jupyter Notebook',
        server: 'DGX-A100',
        location: 'Faculty of IT, KMITL'
    },
    {
        id: "JU-31",
        name: 'bro what?',
        status: 1,
        author: 'shared',
        createdAt: '21 February 2024',
        endDate: '21 February 2024',
        size: 'Nano',
        type: 'Jupyter Notebook',
        server: 'DGX-A100',
        location: 'Faculty of IT, KMITL'
    },
    {
        id: "JU-32",
        name: 'sleep',
        status: 0,
        author: 'shared',
        createdAt: '18 February 2024',
        endDate: '18 February 2024',
        size: 'Nano',
        type: 'Jupyter Notebook',
        server: 'DGX-A100',
        location: 'Faculty of IT, KMITL'
    },
    {
        id: "JU-33",
        name: 'awake',
        status: 0,
        author: 'me',
        createdAt: '19 February 2024',
        endDate: '19 February 2024',
        size: 'Nano',
        type: 'Jupyter Notebook',
        server: 'DGX-A100',
        location: 'Faculty of IT, KMITL'
    }]
    const [instanceData, setInstanceData] = useState<DataItem | undefined>();
    const params = useSearchParams();
    const instanceId = params.get('id');

    useEffect(() => {
        setInstanceData(data.find(item => item.id === instanceId));
    }, [instanceId]);

    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                    {instanceData && (
                        <Typography variant='h4'>My Instances / {instanceData.name}</Typography>
                    )}
                </Grid>

                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Typography variant='h4' sx={{ fontSize: '26px', mb: 5 }} style={{ textAlign: 'center' }}>
                                Thank You! 😇
                            </Typography>

                            {instanceData && (
                                <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 2 }} style={{ textAlign: 'center' }}>
                                    Your order for <b>Bob Roast</b> has been placed! We are setting up your instance.
                                </Typography>
                            )}

                            {instanceData && (
                                <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 2 }} style={{ textAlign: 'center' }}>
                                    We will send an email to 63070126@it.kmitl.ac.th when your lovely instance is ready.
                                </Typography>
                            )}

                            {instanceData && (
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                    <Icon fontSize='1.125rem' icon='tabler:clock' style={{ marginRight: 2 }} />
                                    <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 2 }} style={{ textAlign: 'center' }}>
                                        <b >Time placed: </b> {instanceData.createdAt} 12:34
                                    </Typography>
                                </div>
                            )}

                            <Grid item xs={12} md={12} sx={{ border: 1, borderRadius: '6px', borderColor: '#434968', display: 'flex', flexDirection: 'row', mb: 10 }}>
                                <Grid item xs={3} md={3} sx={{ borderRight: 1, borderColor: '#434968' }}>
                                    <Box sx={{ my: 5, mx: 6, }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 6 }}>
                                            Instance Details
                                        </Typography>
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                            <b>New Instance</b>
                                        </Typography>
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                                Name: <b>Bob Roast</b>
                                            </Typography>
                                        )}
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                                Description:<b>a Stable Diffusion </b>
                                            </Typography>
                                        )}
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px' }}>
                                            Generative AI
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={3} md={3} sx={{ borderRight: 1, borderColor: '#434968' }}>
                                    <Box sx={{ my: 5, mx: 6, }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 6 }}>
                                            Size & Template
                                        </Typography>
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                                Template: <b>TensorFlow</b>
                                            </Typography>
                                        )}
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px' }}>
                                                Size:<b>Nano</b>
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>

                                <Grid item xs={3} md={3} sx={{ borderRight: 1, borderColor: '#434968' }}>
                                    <Box sx={{ my: 5, mx: 6, }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 6 }}>
                                            Storage
                                        </Typography>
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                                Bucket: <b>Existed</b>
                                            </Typography>
                                        )}
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px' }}>
                                                Name:<b>Storage 1</b>
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>

                                <Grid item xs={3} md={3} sx={{ borderRight: 1, borderColor: '#434968' }}>
                                    <Box sx={{ my: 5, mx: 6, }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 6 }}>
                                            Duration
                                        </Typography>
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px', mb: 1 }}>
                                                Start at: <b>08.00, 18 Aug</b>
                                            </Typography>
                                        )}
                                        {instanceData && (
                                            <Typography variant='subtitle1' sx={{ fontSize: '15px' }}>
                                                Duration:<b> 3 Hours</b>
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>

                            {instanceData && (
                                <Typography variant='h4' sx={{ fontSize: '26px', mb: 3 }} style={{ textAlign: 'center' }}>
                                    You’ve used <b style={{ color: '#28C76F', fontWeight: 600 }}>30 credits</b> in this order 🥳
                                </Typography>
                            )}

                            <Typography variant='h4' sx={{ fontSize: '15px', mb: 3 }} style={{ textAlign: 'center' }}>
                                Your new balance is
                            </Typography>

                            {instanceData && (
                                <Typography variant='h4' sx={{ fontSize: '38px', mb: 3 }} style={{ textAlign: 'center' }}>
                                    500 → <b style={{ color: '#28C76F', fontWeight: 600, fontSize: '32px' }}> 470</b>
                                </Typography>
                            )}

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid item xs={10} md={10} sx={{ border: 1, borderRadius: '6px', borderColor: '#00CFE829', px: '10px', py: '10px' }}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CustomAvatar skin='light' variant='rounded' sx={{ ml: 2, mr: 2, width: 40, height: 40, color: '#00CFE8', backgroundColor: '#00CFE852' }}>
                                            <Icon icon='tabler:info-circle' fontSize='1.2rem' />
                                        </CustomAvatar>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='body2' sx={{ fontSize: '18px', color: '#00CFE8' }}>Fun fact: You have more credits than 80% users in this platform!</Typography>
                                            <Typography variant='body2' sx={{ fontSize: '18px', color: '#00CFE8' }}>You know we give free credits every semester right? Use more you credit hoarder 🤑</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </div>

                            <Grid container xs={12} md={12} spacing={1} sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{
                                        py: '10px',
                                        px: '20px',
                                        mr: 3,
                                        backgroundColor: '#7367F0',
                                        color: '#ffff',
                                        '&:hover': {
                                            backgroundColor: '#7367F0',
                                            color: '#FFFFFF'
                                        }
                                    }}
                                >
                                    <Icon fontSize='1.125rem' icon='tabler:arrow-back' /> Back to My Instances
                                </Button>

                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{
                                        py: '10px',
                                        px: '20px',
                                        backgroundColor: '#7367F029',
                                        color: '#7367F0',
                                        '&:hover': {
                                            backgroundColor: '#7367F029',
                                            color: '#7367F0'
                                        }
                                    }}
                                >
                                    <Icon fontSize='1.125rem' icon='tabler:plus' /> Add More Instance
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ApexChartWrapper>
    )
}

export default InstanceDetail
