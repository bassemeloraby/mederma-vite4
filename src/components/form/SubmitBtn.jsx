import React, { Fragment } from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <Fragment>
          <span className='loading loading-spinner'></span>
          sending...
        </Fragment>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;