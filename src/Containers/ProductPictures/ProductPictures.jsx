// Style sheet
import '../../Stylesheet/css/ProductPictures.css';
// Import React stuff
import React, { useState } from 'react';
// Import product pictures
import productImg1 from '../../images/image-product-1.jpg';
import productImg2 from '../../images/image-product-2.jpg';
import productImg3 from '../../images/image-product-3.jpg';
import productImg4 from '../../images/image-product-4.jpg';
import productImg1Thumb from '../../images/image-product-1-thumbnail.jpg';
import productImg2Thumb from '../../images/image-product-2-thumbnail.jpg';
import productImg3Thumb from '../../images/image-product-3-thumbnail.jpg';
import productImg4Thumb from '../../images/image-product-4-thumbnail.jpg';
// import button images
// Components
import { PictureContainer } from './PictureContainer';


export const ProductPictures = () => {

	// Handle display pictures
	const displayPictures = [productImg1, productImg2, productImg3, productImg4];
	const [displayIndex, setDisplayIndex ] = useState(0);

	const nextPic = () => {
		if (displayIndex > 0) {
			setDisplayIndex(prevIndex => prevIndex - 1);
		} else {
			setDisplayIndex(prevIndex => prevIndex = 3);
		}
	};
	const prevPic = () => {
		if (displayIndex < 4) {
			setDisplayIndex(prevIndex => prevIndex + 1);
		} else {
			setDisplayIndex(prevIndex => prevIndex = 0);
		}
	};

	const displayPicture = () => {
		return <img src={displayPictures[displayIndex]} alt="product pictures" />;
	};

	// Handle Thumbnail
	// Generating thumbnail
	const generateThumbnails = () => {
		const thumbnails = [productImg1Thumb, productImg2Thumb, productImg3Thumb, productImg4Thumb];
		return thumbnails.map((thumbnail, index) => {
			return (
				<img
					onClick={() => setDisplayIndex(index)}
					src={thumbnail}
					alt="thumbnail"
					key={index} />
			);
		});
	};

	return (
		<>
			<PictureContainer
				image={displayPicture()}
				onNext={nextPic}
				onPrev={prevPic}
			/>
			<div className="thumbnails">
				{generateThumbnails()}
			</div>
		</>
	);
};
