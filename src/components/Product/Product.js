import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';
import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getTotalPrice = (basePrice, additionalPrice) => {
    return basePrice + additionalPrice;
  };

  const totalPrice = useMemo( () => getTotalPrice(props.basePrice, currentSize.additionalPrice), [props.basePrice, currentSize],
  );

  return (
    <article className={styles.product}>
      <ProductImage name={props.name}
                    title={props.title}
                    currentColor={currentColor} />          
      <ProductOptions sizes={props.sizes}
                    colors={props.colors}
                    title={props.title}
                    totalPrice={totalPrice}
                    basePrice={props.basePrice}
                    currentColor={currentColor}
                    currentSize={currentSize}
                    setCurrentColor={setCurrentColor}
                    setCurrentSize={setCurrentSize} />
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;