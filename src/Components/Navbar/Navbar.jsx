// Stylesheet
import '@root/Stylesheet/css/Navbar.css';
// Imports from Router dom
import { NavLink } from 'react-router-dom';
// Import images
import shoppingCart from '@root/images/icon-cart.svg';
import Logo from '@root/images/logo.svg';
import avatar from '@root/images/image-avatar.png';
import MenuIcon from '@root/images/icon-menu.svg';

export const Navbar = ({ isOpen, setOpenNav }) => {

	const menuToggle = () => {
		setOpenNav(prevState => !prevState);
	};

	return (
		<nav className="nav-bar">
			<div className="mobile-menu" onClick={menuToggle}>
				<img src={MenuIcon} alt="menu icon" />
			</div>
			<div className="logo">
				<img src={Logo} alt="company logo" />
			</div>

			<ul style={ isOpen ? {
				transform: "translateX(0)",
			} : null } className="nav-links">
				<div className="shop">
					<li>
						<NavLink to='/collections'>
							Collections
						</NavLink>
					</li>
					<li>
						<NavLink to='/men'>
							Men
						</NavLink>
					</li>
					<li>
						<NavLink to='/women'>
							Women
						</NavLink>
					</li>
				</div>
				<div className="contact">
					<li>
						<NavLink to='/about'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>
							Contact
						</NavLink>
					</li>
				</div>
			</ul>
			<ul className="cart-section">
				<li className="cart"><img src={shoppingCart} alt="shopping cart" /></li>
				<li className="profile"><img src={avatar} alt="profile" /></li>
			</ul>
		</nav>
	);
};
