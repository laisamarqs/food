import { ComponentType } from 'react'
import { Meta } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import CategoryList from '.'
import { worker } from '../../../mocks/api/index-worker'

worker.start()

const queryClient = new QueryClient()

const meta = {
  title: 'view/CategoryList',
  component: CategoryList,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: ComponentType) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
} satisfies Meta<typeof CategoryList>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => <CategoryList />