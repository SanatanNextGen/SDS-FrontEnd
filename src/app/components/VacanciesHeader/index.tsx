const VacanciesHeader = () => {
  return (
    <header
      data-testid="vacancies-header-text"
      className="mt-10 flex flex-col items-center justify-center"
    >
      <h1 className="my-4 flex flex-col items-center justify-center text-xl font-bold tracking-wider text-primary-400 md:text-3xl">
        Find your vacancy<span>volunteer here!</span>
      </h1>
      <h2 className="flex flex-col items-center justify-center text-xs tracking-wider text-white md:text-base">
        Be part of the Developers Group:{' '}
        <span>where talent is voluntary and innovation is infinite!</span>
      </h2>
    </header>
  )
}

export default VacanciesHeader
