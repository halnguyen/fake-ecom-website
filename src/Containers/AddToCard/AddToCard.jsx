// Import source svg
import Plus from '../../images/icon-plus.svg';
import Minus from '../../images/icon-minus.svg';
import Cart from '../../images/icon-cart.svg';
// React hooks
import { useState } from 'react';

export const AddToCard = ({ price, onSubmit }) => {
	const [quantity, setQuantity] = useState(0);
	const handleChange = ({ target }) => {
		setQuantity(() => Number(target.value));
		console.log(quantity);
	};

	const handleClick = () => {
		onSubmit(quantity * price);
	};

	return (
		<>
			<form >
				<div className="input">
					<button><img src={Minus} alt="increase quantity" /></button>
					<input onChange={handleChange} type="number" min={0} />
					<button><img src={Plus} alt="decrease quantity" /></button>
				</div>
					<div onClick={handleClick} className="add">
						<img src={Cart} alt="" /> Add to cart
					</div>
			</form>
		</>
	);

};
