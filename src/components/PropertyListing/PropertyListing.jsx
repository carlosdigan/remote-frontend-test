import PropTypes from 'prop-types';
import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties, isLoading, hasError }) => {
    if (isLoading) {
        return <p>Loading ...</p>;
    } else if (hasError) {
        return <p>There was an error fetching properties</p>;
    } else {
        return (
            <ul className="PropertyListing">
                Properties
                {properties.map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
            </ul>
        );
    }
};

PropertyListing.propTypes = {
    properties: PropTypes.array,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
};
export default PropertyListing;
