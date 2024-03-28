// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      badgeContent: 'new',
      badgeColor: 'error',
      path: '/'
    },
    {
      sectionTitle: 'INSTANCES MANAGEMENT'
    },
    {
      title: 'My Instances',
      icon: 'tabler:server',
      path: '/dashboards/my-instances'
    },
    {
      title: 'Credits',
      icon: 'tabler:coin',
      path: '/credit'
    },
    {
      title: 'Preferences',
      icon: 'tabler:settings',
      path: '/apps/calendar'
    },
    {
      sectionTitle: 'MISC'
    },
    {
      title: 'Support',
      icon: 'tabler:headphones'
    },
    {
      icon: 'tabler:file-description',
      title: 'Documentation',
      path: '/forms/form-layouts'
    }
  ]
}

export default navigation
