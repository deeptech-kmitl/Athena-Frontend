// ---- แก้ไขทำ Instant Detail ----

// ** MUI Imports
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import StatusOfflineIcon from '../dashboard/StatusOfflineIcon'
import StatusOnlineIcon from '../dashboard/StatusOnlineIcon'

// interface DataType {
//   icon: string
//   stats: string
//   title: string
//   color: ThemeColor
// }

interface DataTag {
  tag: string
}


// const data: DataType[] = [
//   {
//     color: 'success',
//     stats: 'Running',
//     title: 'Normal',
//     icon: 'tabler:circle-half-2'
//   },
//   {
//     color: 'primary',
//     stats: '1',
//     title: 'Day Left',
//     icon: 'tabler:clock'
//   }
// ]

const dataTag: DataTag[] = [
  {
    tag: 'Jupyter'
  },
  {
    tag: 'AI'
  }
]

const renderTag = () => {
  return dataTag.map((sale: DataTag, index: number) => (
    <Typography
      key={index}
      sx={{
        mr: 2,
        color: 'text.secondary',
        border: '1px solid none',
        backgroundColor: '#A8AAAE29',
        borderRadius: '4px',
        paddingBlock: '5px',
        paddingInline: '10px'
      }}
    >
      {sale.tag}
    </Typography>
  ))
}

const rendertextstats = (props: any) => {
  console.log("stats", props)

  if (props.status === 1) {
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h5' sx={{ color: "#28C76F " }}>Running</Typography>
      <Typography variant='body2'>Normal</Typography>
    </Box>
  }
  if (props.status === 0) {
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h5'>Stop</Typography>
      <Typography variant='body2'>Normal</Typography>
    </Box>
  }
}

// const rendertextDate = (props: any) => {
//   console.log("props", props)

  const endDate = new Date(props.endDate);
  const createdAt = new Date(props.createdAt);

  console.log("เริ่ม", createdAt)
  console.log("จบ", endDate)

//   // const timeDifference = endDate - createdAt;
//   // const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

//   // if (daysDifference === 0) {
//   //   return 1
//   // }
//   // else {
//   //   return daysDifference
//   // }
// }

const renderStats = (props: any) => {
  console.log(props)

  return <Grid item xs={6} md={7} sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 42, height: 42 }}>
        {props.status === 1 ? <StatusOnlineIcon /> : <StatusOfflineIcon />}
      </CustomAvatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {rendertextstats(props)}
      </Box>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 42, height: 42 }}>
        <Icon icon='tabler:clock' fontSize='1.2rem' />
      </CustomAvatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* <Typography variant='h5'>{rendertextDate(props)}</Typography> */}
        <Typography variant='body2'>Day Left</Typography>
      </Box>
    </Box>
  </Grid>
}

const renderDetail = (props: any) => {
  return <Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>ID: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontWeight: 600, fontSize: '15px' }}>{props.id}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Author: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.author}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Created At: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.createdAt}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Expired At: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px', color: '#FF9F43' }}>{props.endDate}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Size: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.size}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Type: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.type}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Server: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.server}</Typography>
    </Grid>
    <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
      <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Location: </Typography>
      <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{props.location}</Typography>
    </Grid>
  </Grid>
}

const InstantDetail = ({ props }: any) => {

  return (
    <Card sx={{ position: 'relative' }} style={{ lineHeight: '10' }}>
      <CardContent>
        {/* change text */}
        <Typography variant='h3' sx={{ mb: 4 }} style={{ textAlign: 'center' }}>
          {props.name}
        </Typography>

        {/* add tag */}
        <Box sx={{ mb: 5, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderTag()}
        </Box>

        <Grid spacing={2} container sx={{ mb: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
          {renderStats(props)}
        </Grid>

        <Divider sx={{ mb: 5 }} />

        <Typography variant='subtitle1' sx={{ mb: 7 }} style={{ color: '#8692D0' }}>
          DETAILS
        </Typography>

        <Grid>{renderDetail(props)}</Grid>

        <Divider sx={{ mb: 5 }} />

        <Grid container xs={12} md={12} spacing={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type='submit'
            variant='contained'
            sx={{
              mr: 2,
              mb: 2,
              width: '45%',
              backgroundColor: '#7367F029',
              color: '#7367F0',
              '&:hover': {
                backgroundColor: '#7367F029',
                color: '#FFFFFF'
              }
            }}
          >
            Extend
          </Button>

          <Button
            type='submit'
            variant='contained'
            sx={{
              mb: 2,
              width: '45%',
              backgroundColor: '#FF9F4329',
              color: '#FF9F43',
              '&:hover': {
                backgroundColor: '#FF9F4329',
                color: '#FFFFFF'
              }
            }}
          >
            Restart
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{
              mr: 2,
              mb: 2,
              width: '45%',
              backgroundColor: '#EA545529',
              color: '#EA5455',
              '&:hover': {
                backgroundColor: '#EA545529',
                color: '#FFFFFF'
              }
            }}
          >
            Stop
          </Button>

          <Button
            type='submit'
            variant='contained'
            color='error'
            sx={{
              mb: 2,
              width: '45%'
            }}
          >
            Delete
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InstantDetail
