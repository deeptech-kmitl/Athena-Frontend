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

const AnalyticsDashboard = () => {
  const [data] = useState([{
    id: "JU-30",
    name: 'hello world',
    status: 1,
    author: 'me',
    endDate: '20 February 2024'
  },
  {
    id: "JU-31",
    name: 'bro what?',
    status: 1,
    author: 'shared',
    endDate: '21 February 2024'
  },])

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
            <InstancesDashboard props={data} page={'dashboard'} />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
