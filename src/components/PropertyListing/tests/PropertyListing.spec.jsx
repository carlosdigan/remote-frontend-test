import { within } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PropertyListing from '../PropertyListing';
import { DUMMY_PROPERTIES } from './mockData';

describe('PropertyListing', () => {
    it('should render five property cards', () => {
        render(<PropertyListing properties={DUMMY_PROPERTIES} hasError={false} isLoading={false} />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = within(propertiesList).getAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });

    it('should render loading message', () => {
        render(<PropertyListing properties={[]} hasError={false} isLoading={true} />);
        expect(screen.getByText('Loading ...')).toBeInTheDocument();
    });

    it('should render error message', () => {
        render(<PropertyListing properties={[]} hasError={true} isLoading={false} />);
        expect(screen.getByText('There was an error fetching properties')).toBeInTheDocument();
    });
});
