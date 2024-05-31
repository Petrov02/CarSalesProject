import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import AdList from './AdList';
import "./services.css";
import { Advertisement } from '../../../backend/models/Advertisement';

interface FormState {
    brand: string;
    model: string;
    fuel: string;
}

export const Services: React.FC = () => {
    const [filteredAds, setFilteredAds] = useState<Advertisement[]>([]); 

    const handleFilter = async (formState: FormState) => {
        const data = await fetch(`http://localhost:3004/api/advertisement/${formState.brand}/${formState.model}/${formState.fuel}`);
            const result = await data.json();

            setFilteredAds(result);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:3004/api/advertisement");
            const result = await data.json();

            setFilteredAds(result);
        }

        fetchData();
    }, [])

    return (
        <div className="services-page">
            <Filter onFilter={handleFilter} />
            <AdList advertisements={filteredAds} />
        </div>
    );
}

export default Services;
