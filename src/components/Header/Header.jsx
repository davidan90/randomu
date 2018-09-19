import Navbar from '../Navbar';
import NavBarMobile from '../NavbarMobile';
import './Header.scss';

const Header = () => (
  <header className='main-header'>
    <div className='main-header__section'>
      <div className='main-header__title'>
        <h1>Random U</h1>
      </div>
      <Navbar />
      <NavBarMobile />
    </div>
  </header>
);

export default Header;
