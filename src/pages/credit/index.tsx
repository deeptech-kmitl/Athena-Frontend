import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid'

import CustomTextField from 'src/@core/components/mui/text-field';
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

import { ProjectTableRowType } from 'src/@fake-db/types';

import OptionsMenu from 'src/@core/components/option-menu';

import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';

interface CellType {
    row: ProjectTableRowType
}

const Credits = () => {
    const [data] = useState([{
        id: "Noppawan",
        note: 'Instance Reserve',
        transaction: 'Payment',
        amount: 30,
        datetime: '20 February 2024-19:20:35'
    },
    {
        id: "Goten",
        note: 'Account Transfer',
        transaction: 'Transfer in',
        amount: 20,
        datetime: '21 February 2024-15:42:28'
    },])
    const router = useRouter()
    const columns: GridColDef[] = [
        {
            flex: 0.1,
            field: 'account',
            headerName: 'ACCOUNT',
            renderCell: ({ row }: CellType) => {
                const handleSelectedInstance = (id: string) => {
                    router.push(`/dashboards/my-instances/instance-detail/?id=${id}`)
                };

                return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex' }}>
                            <CustomAvatar alt="Remy Sharp" src="/public/images/avatars/1.png" />
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '10px' }}>
                                <Typography noWrap sx={{
                                    color: '#ffff', fontWeight: 400, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': {
                                        color: '#eee',
                                    }
                                }} onClick={() => handleSelectedInstance(row.id)}>
                                    {row.id}
                                </Typography>
                                <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 300 }}>
                                    {row.transaction}
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                )
            }
        },
        {
            flex: 0.1,
            minWidth: 105,
            field: 'transaction',
            headerName: 'TRANSACTION',
            renderCell: ({ row }: CellType) => {
                const handleSelectedInstance = (id: string) => {
                    router.push(`/dashboards/my-instances/instance-detail/?id=${id}`)
                };

                return (
                    <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        {row.transaction}
                    </Typography>)
            }
        },
        {
            flex: 0.1,
            minWidth: 150,
            field: 'amount',
            headerName: 'AMOUNT',
            renderCell: ({ row }: CellType) => {
                return (<Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {row.amount}
                </Typography>)
            }
        },
        {
            flex: 0.1,
            minWidth: 150,
            field: 'dateTime',
            headerName: 'DATE TIME',
            renderCell: ({ row }: CellType) => {
                return (<Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {row.datetime}
                </Typography>)
            }
        },
        {
            flex: 0.1,
            minWidth: 150,
            field: 'notes',
            headerName: 'NOTES',
            renderCell: ({ row }: CellType) => {
                return (<Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {row.note}
                </Typography>)
            }
        },
    ]

    // ** State
    // const [data] = useState(props)
    const [value, setValue] = useState<string>('')

    // const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })

    useEffect(() => {
        // axios.get('/pages/profile-table', { params: { q: value } }).then(response => {
        //   setData(response.data)
        // })
        // setData(response.data)
    }, [value])

    const handleFilter = (val: string) => {
        setValue(val)
    }

    return (
        <Grid >
            <Grid container xs={12} md={12} sx={{ border: 1, borderRadius: '6px', backgroundColor: '#FF9F4329', borderColor: '#FF9F4329', px: '12px', py: '15px' }}>
                <Grid item xs={10} md={10}>
                    <Box sx={{ display: 'flex' }}>
                        <CustomAvatar skin='light' variant='rounded' sx={{ ml: 2, mr: 3, width: 34, height: 34, color: '#FF9F43', backgroundColor: '#FF9F4352' }}>
                            <Icon icon='tabler:bell' fontSize='1.2rem' />
                        </CustomAvatar>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='body2' sx={{ fontSize: '18px', color: '#FF9F43', fontWeight: 600, mb: 2 }}>You have insufficient credits! Please request more credits to continue using.</Typography>
                            <Typography variant='body2' sx={{ fontSize: '15px', color: '#FF9F43', fontWeight: 500 }}>Fun fact: You are in a top 5% top spender in the entire platform! This also means you are very poor 💸</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={2} md={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignitems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 5 }}>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{
                                width: '160px',
                                height: '38px',
                                mb: 3,
                                backgroundColor: '#7367F0',
                                color: '#ffff',
                                '&:hover': {
                                    backgroundColor: '#7367F0',
                                    color: '#FFFFFF'
                                }
                            }}
                        >
                            Request Credits
                        </Button>
                        <Button
                            type='submit'
                            variant='outlined'
                            sx={{
                                width: '160px',
                                height: '38px',
                                color: '#A8AAAE',
                                borderColor: '#A8AAAE',
                                '&:hover': {
                                    color: '#A8AAAE',
                                    borderColor: '#A8AAAE'
                                }
                            }}
                        >
                            Close
                        </Button>
                    </div>
                </Grid>
            </Grid>
            < Card sx={{ mt: '30px' }}>
                <CardHeader
                    action={
                        <>

                            <FormControl sx={{ ml: 4, minWidth: 80 }} size="small">
                                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="filter"
                                >
                                    <MenuItem value={20}>Today</MenuItem>
                                    <MenuItem value={20}>This Week</MenuItem>
                                    <MenuItem value={10}>This Month</MenuItem>
                                </Select>
                            </FormControl>
                        </>
                    }

                    sx={{
                        py: 4,
                        flexDirection: ['column', 'row'],
                        '& .MuiCardHeader-action': { m: 0, flexDirection: ['column', 'row'], display: 'flex' },
                        alignItems: ['flex-start', 'center']
                    }}
                />
                <DataGrid
                    autoHeight
                    rows={data}
                    rowHeight={62}
                    columns={columns}
                    pageSizeOptions={[5, 10]}
                />
            </Card>
        </Grid>
    )
}

export default Credits
