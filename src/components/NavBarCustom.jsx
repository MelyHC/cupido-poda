import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/components.css'

const NavBarCustom = () => {
  return (
    <Navbar expand='md' fixed='top' className='bg-body-tertiary' data-bs-theme="dark">
      <Container className='p-4 w-100vw'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='cupido-poda/react.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Trust Toke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Inicio</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarCustom