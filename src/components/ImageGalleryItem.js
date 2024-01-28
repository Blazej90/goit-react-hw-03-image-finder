import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
