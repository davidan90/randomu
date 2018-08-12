import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavbarMobile.scss';

export class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuShow: false
    }
  }

  toogleMenu = () => this.setState(state => ({ isMenuShow: !state.isMenuShow }));

  render() {
    const { isMenuShow } = this.state
    return (
      <div className={`navbar-mobile ${isMenuShow ? 'active' : ''}`}>
        {
          isMenuShow
            ? <span className='close' onClick={this.toogleMenu}>Close</span>
            : <span className='title' onClick={this.toogleMenu}>Menu</span>
        }
        <nav>
          <ul>
            <li onClick={this.toogleMenu}>
              <Link to='/home'>Home</Link>
            </li>
            <li onClick={this.toogleMenu}>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
