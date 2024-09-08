import { useEffect, useState } from 'react';

export const useProperties = (queryParams) => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function getProperties() {
            try {
                const response = await fetch('http://localhost:3000/api/properties');
                if (!response.ok) {
                    throw new Error("Error in fetching properties")
                }
                const properties = await response.json();
                setProperties(properties);
            } catch (e) {
                setHasError(true);
            }
            setIsLoading(false);
        }

        getProperties();
    }, [queryParams]);

    return { properties, isLoading, hasError };
};
