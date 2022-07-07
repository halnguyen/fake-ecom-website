// Import resources
import productImg1 from '../../images/image-product-1.jpg';
import productImg2 from '../../images/image-product-2.jpg';
import productImg3 from '../../images/image-product-3.jpg';
import productImg4 from '../../images/image-product-4.jpg';
import ArrowIcon from '../../images/icon-next.svg';
// React Proptypes
import PropTypes from 'prop-types';


export const PictureContainer = ({ image, onNext, onPrev }) => {
	const displayPictures = [productImg1, productImg2, productImg3, productImg4];

	return (
		<div className="product-img-display">
			<button className="prev display-nav" onClick={onPrev}>
				<img  src={ArrowIcon} alt="prev-button" />
			</button>
			{image}
			<button className="next display-nav" onClick={onNext}>
				<img src={ArrowIcon} alt="next-button" />
			</button>
		</div>
	);
};

PictureContainer.propTypes = {
	image: PropTypes.object.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired
};
