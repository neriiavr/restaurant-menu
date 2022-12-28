import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
import { images } from "../../constants"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    </div>
    <div className='app__wrapper_img'>
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
    </div>
  </div>
);

export default Header;
