import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
    const starArray = [1, 2, 3, 4, 5];
    const createStar = val => {
        return (
            <span key={`star-${val}`} >
                <i style={{ color }} className={value >= val ? 'fas fa-star' : value >= val - 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
        );
    }
    return (
        <div className='rating'>
            {starArray.map(val => createStar(val))}
            <span> {text && text}</span>
        </div>
    );
}

Rating.defaultProps = {
    color: '#f8e825'
};

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default Rating;
