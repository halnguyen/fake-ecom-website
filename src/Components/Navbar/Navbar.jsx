// Stylesheet
import '../../Stylesheet/css/Navbar.css';
// Imports from Router dom
import { NavLink } from 'react-router-dom';
// Import images
import shoppingCart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

export const Navbar = ({ isOpen }) => {
	const navLinks = () => {
		return (
			<ul className="nav-links">
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
			</ul>
		);
	};

	return (
		<nav className="nav-bar">
			{isOpen && navLinks()}
			<ul className="cart">
				{/* <li><FontAwesomeIcon icon={faCartShopping} /></li> */}
				<li><img src={shoppingCart} alt="shopping cart icon" /></li>
				<li><img src={avatar} alt="profile picture" /></li>
			</ul>
		</nav>
	);
};
