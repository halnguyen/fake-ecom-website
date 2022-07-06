// Style sheet
import '../../Stylesheet/css/ProductPictures.css';
// Import product pictures
import productImg1 from '../../images/image-product-1.jpg';
import productImg1Thumb from '../../images/image-product-1-thumbnail.jpg';
import productImg2 from '../../images/image-product-2.jpg';
import productImg2Thumb from '../../images/image-product-2-thumbnail.jpg';
import productImg3 from '../../images/image-product-3.jpg';
import productImg3Thumb from '../../images/image-product-3-thumbnail.jpg';
import productImg4 from '../../images/image-product-4.jpg';
import productImg4Thumb from '../../images/image-product-4-thumbnail.jpg';
// import button images
import ArrowIcon from '../../images/icon-next.svg';
export const ProductPictures = () => {
	return (
		<>
			<div className="display">
				<button className="prev display-nav">
					<img src={ArrowIcon} alt="prev-button" />
				</button>
				<img src={productImg1} alt="product image" />
				<button className="next display-nav">
					<img src={ArrowIcon} alt="next-button" />
				</button>
			</div>
			<div className="thumbnails">
				<img src={productImg1Thumb} alt="thumbnail" />
				<img src={productImg2Thumb} alt="thumbnail" />
				<img src={productImg3Thumb} alt="thumbnail" />
				<img src={productImg4Thumb} alt="thumbnail" />
			</div>
		</>
	);
};
