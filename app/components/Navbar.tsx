import Container from './Container'

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 text-4xl shadow-md font-semibold">
        <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                {/*Logo will go here*/}
                Constantine
            </div>
        </Container>
    </div>
  )
}

export default Navbar