import React, { useState, useEffect } from 'react';

interface FilterProps {
    onFilter: (filters: any) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilter }) => {
    const [brands, setBrands] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);
    const [fuels, setFuels] = useState<any[]>([]);
    
    const [formState, setFormState] = useState({
        brand: "",
        model: "",
        fuel: ""
    });

    useEffect(() => {
        const fetchBrands = async () => {
            const response = await fetch("http://localhost:3004/api/brands");
            const data = await response.json();
            setBrands(data);
        };

        fetchBrands();
    }, []);

    useEffect(() => {
        const fetchFuels = async () => {
            const response = await fetch("http://localhost:3004/api/fuels");
            const data = await response.json();
            setFuels(data);
        };

        fetchFuels();
    }, []);

    useEffect(() => {
        const fetchModels = async () => {
            if (formState.brand !== "") {
                const response = await fetch(`http://localhost:3004/api/models/${formState.brand}`);
                const data = await response.json();
                setModels(data);
            }
        };

        fetchModels();
    }, [formState.brand]);

    const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        onFilter(formState);
    };

    return (
        <div className="filter-section">
            <h2>Филтриране на обяви</h2>
            <form onSubmit={submitForm}>
                <label>Марка:
                    <select value={formState.brand} name="brand" onChange={handleFormChange}>
                        <option value="">Избери марка</option>
                        {brands.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                    </select>
                </label>

                <label>Модел:
                    <select value={formState.model} name="model" onChange={handleFormChange}>
                        <option value="">Избери модел</option>
                        {models.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                    </select>
                </label>

                <label>Гориво:
                    <select value={formState.fuel} name="fuel" onChange={handleFormChange}>
                        <option value="">Избери гориво</option>
                        {fuels.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                    </select>
                </label>

                <button type="submit">Филтрирай</button>
            </form>
        </div>
    );
};

export default Filter;
