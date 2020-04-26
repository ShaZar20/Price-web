import React from 'react';
// import {NavLink} from 'react-router-dom';
import '../styles/styles.scss';

const Header = () => (
 <header className="header">
     <div>PriceHistory</div>
     <div className="header-nevbar">
        <div>Home</div>
        <div>Download</div>
        <div>Bookmarklet</div>
        <div>API</div>
        <div>FAQs</div>
     </div>
 </header>
);

export default Header;