// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import ActiveInstances from 'src/views/dashboards/dashboard/ActiveInstances'
import Credits from 'src/views/dashboards/dashboard/Credits'
import InstancesDashboard from 'src/views/dashboards/dashboard/InstancesDashboard'
import StorageUsed from 'src/views/dashboards/dashboard/StorageUsed'

// ** Custom Component Import
import { useState } from 'react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const MyInstances = () => {
  const [data] = useState([{
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
  }])

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={4}>
            <ActiveInstances props={data.length} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StorageUsed />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Credits />
          </Grid>
          <Grid item xs={12}>
            <InstancesDashboard props={data} page={'my-instances'} />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default MyInstances
