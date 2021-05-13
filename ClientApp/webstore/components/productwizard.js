import { quickOrderAddProducts } from 'behavior/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
//{ model: { source, title }}
const ProductWizardBlock = () => {
  const title = 'Product Wizard';
  const source = 'http://localhost:3000';
  const dispatch = useDispatch();
  const completionListener = event => {
    // Do we trust the sender of this message?
    if (event.origin === 'http://localhost:3000') {
      event.data && dispatch(quickOrderAddProducts(event.data));
    }

  };
  useEffect(() => {
    window.addEventListener('message', completionListener);
    return () => {
      window.removeEventListener('message', completionListener);
    };
  }, []);
  return (
    <div>
      <h4>
        {title}
      </h4>
      <iframe title={title} src={source} width="560" height="315" />
    </div>
  );
};

// ProductWizardBlock.propTypes = {
//   model: PropTypes.object,
// };

export default ProductWizardBlock;