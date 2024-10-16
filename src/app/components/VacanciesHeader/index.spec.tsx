import VacanciesHeader from '.'
import { render, screen } from '@testing-library/react'

describe('<VacanciesHeader/>', () => {
  it('should render the component', () => {
    render(<VacanciesHeader />)

    expect(screen.getByTestId('vacancies-header-text')).toBeInTheDocument()
  })

  it('should display the main title correctly', () => {
    render(<VacanciesHeader />)

    const mainTitle = screen.getByRole('heading', {
      name: /Find your vacancy volunteer here!/i,
    })

    expect(mainTitle).toBeInTheDocument()
  })

  it('should display the secondary title correctly', () => {
    render(<VacanciesHeader />)

    expect(
      screen.getByText('Be part of the Developers Group:'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('where talent is voluntary and innovation is infinite!'),
    ).toBeInTheDocument()
  })

  it('should have the correct styling', () => {
    render(<VacanciesHeader />)

    const headerElement = screen.getByTestId('vacancies-header-text')
    expect(headerElement).toHaveClass('mt-10')
    expect(headerElement).toHaveClass('flex')
  })
})
