import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import Home from '..'
import { renderWithProvider } from '../../../utils/redux-store-tests'
import { expect } from 'vitest'

describe('<Home />', () => {
  it('should be render correctly', () => {
    renderWithProvider(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'EFOOD' })).toBeInTheDocument()
  })
})