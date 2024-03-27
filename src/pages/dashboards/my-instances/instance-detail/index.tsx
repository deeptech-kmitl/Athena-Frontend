import * as React from 'react';

import Grid from '@mui/material/Grid';

import BasicInfo from 'src/views/dashboards/instanceDetail/BasicInfo';
import Instancesdetail from 'src/views/dashboards/instanceDetail/Instancesdetail';
import DoneInstance from 'src/views/dashboards/dashboard/Doneinstance';

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
            <Typography variant='h4'>My Instances / {instanceData.name} (#{instanceData.id})</Typography>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {instanceData && (
            <Instancesdetail props={instanceData} />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                disableRipple
                icon={<PersonIcon />}
                iconPosition='start'
                label='Basic Information'
                {...allyProps(0)}
              />
              <Tab disableRipple icon={<FileIcon />} iconPosition='start' label='Files' {...allyProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BasicInfo />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Files />
          </CustomTabPanel>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default InstanceDetail
