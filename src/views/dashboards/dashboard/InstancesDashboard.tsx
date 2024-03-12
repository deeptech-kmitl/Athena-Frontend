import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import CustomTextField from 'src/@core/components/mui/text-field';

import { ProjectTableRowType } from 'src/@fake-db/types';

import OptionsMenu from 'src/@core/components/option-menu';

import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';
import StatusIcon from './StatusIcon';
import StatusOfflineIcon from './StatusOfflineIcon';
import StatusOnlineIcon from './StatusOnlineIcon';


interface CellType {
  row: ProjectTableRowType
}

// ** renders name column
// const renderName = (row: ProjectTableRowType) => {
//   if (row.avatar) {
//     return <CustomAvatar src={row.avatar} sx={{ mr: 2.5, width: 38, height: 38 }} />
//   } else {
//     return (
//       <CustomAvatar
//         skin='light'
//         color={(row.avatarColor as ThemeColor) || ('primary' as ThemeColor)}
//         sx={{ mr: 2.5, width: 38, height: 38, fontSize: theme => theme.typography.body1.fontSize }}
//       >
//         {getInitials(row.name || 'John Doe')}
//       </CustomAvatar>
//     )
//   }
// }

const InstancesDashboard = ({ props, page }: { props: any, page: string }) => {
  const router = useRouter()
  const columns: GridColDef[] = [
    {
      flex: 0.1,
      field: 'id',
      minWidth: 150,
      headerName: 'ID',
      renderCell: ({ row }: CellType) => {
        const handleSelectedInstance = (id: string) => {
          router.push(`/dashboards/my-instances/instance-detail/?id=${id}`)
        };

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap sx={{
                color: '#7367F0', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': {
                  color: '#eee',
                }
              }} onClick={() => handleSelectedInstance(row.id)}>
                #{row.id}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 105,
      field: 'name',
      headerName: 'NAME',
      renderCell: ({ row }: CellType) => {
        const handleSelectedInstance = (id: string) => {
          router.push(`/dashboards/my-instances/instance-detail/?id=${id}`)
        };

        return (
          <Typography noWrap sx={{
            color: '#7367F0', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': {
              color: '#eee',
            }
          }}
            onClick={() => handleSelectedInstance(row.id)}
          >
            {row.name}
          </Typography >)
      }
    },
    {
      flex: 0.1,
      field: 'status',
      minWidth: 120,
      sortable: false,
      renderHeader: () => {
        return (<Typography noWrap>
          <StatusIcon />
        </Typography>)
      },
      renderCell: ({ row }: CellType) => {
        return (<Typography noWrap >
          {row.status === 1 ? <StatusOnlineIcon /> : <StatusOfflineIcon />}

        </Typography >)
      }
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: 'author',
      headerName: 'AUTHOR',
      renderCell: ({ row }: CellType) => {
        return (<Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
          {row.author}
        </Typography>)
      }
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: 'endDate',
      headerName: 'EXPIRY DATE',
      renderCell: ({ row }: CellType) => {
        return (<Typography noWrap sx={{ color: 'text.secondary', fontWeight: 500 }}>
          {row.endDate}
        </Typography>)
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: () => (
        <OptionsMenu
          iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
          options={[
            'Details',
            'Archive',
            { divider: true, dividerProps: { sx: { my: theme => `${theme.spacing(2)} !important` } } },
            {
              text: 'Delete',
              menuItemProps: {
                sx: {
                  color: 'error.main',
                  '&:not(.Mui-focusVisible):hover': {
                    color: 'error.main',
                    backgroundColor: theme => hexToRGBA(theme.palette.error.main, 0.08)
                  }
                }
              }
            }
          ]}
        />
      )
    }
  ]

  // ** State
  const [data] = useState(props)
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

  return data ? (
    <Card>
      <CardHeader
        title={
          <>
            <span>My Instances</span>
            <Button variant="contained" sx={{ ml: 4 }} >+ Add Instance</Button>
          </>
        }
        titleTypographyProps={{ sx: { mb: [2, 0] } }}
        action={
          <>

            <CustomTextField
              value={value}
              placeholder='Search Instances'
              onChange={e => handleFilter(e.target.value)}
            />

            {/* <Autocomplete
              options={['Option 1', 'Option 2', 'Option 3']}
              // renderInput=""
              renderInput={(params) => <TextField {...params} label="Select Status" />}
            /> */}
            {page === 'my-instances' && <FormControl sx={{ ml: 4, minWidth: 80 }} size="small">
              <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>online</MenuItem>
                <MenuItem value={20}>offline</MenuItem>
              </Select>
            </FormControl>}
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

        // pagination
        rows={data}
        rowHeight={62}
        columns={columns}

        // checkboxSelection
        pageSizeOptions={[5, 10]}

      // disableRowSelectionOnClick
      // paginationModel={paginationModel}
      // onPaginationModelChange={setPaginationModel}
      />
    </Card>
  ) : null
}

export default InstancesDashboard
