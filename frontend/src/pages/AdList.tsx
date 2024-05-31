import React from 'react';
import { Advertisement } from '../../../backend/models/Advertisement';


interface AdListProps {
    advertisements: Advertisement[];
}

const AdList: React.FC<AdListProps> = ({ advertisements }) => {
    return (
        <div className="advertisements-list">
            <h2>Списък с обяви</h2>
            {advertisements.length > 0 ? (
                <ul>
                    {advertisements.map(ad => (
                        <li style={{border: "4px solid black", margin: "10px 0"}} key={ad.id} className="advertisement-item">
                            <h3>{ad.brand_name} {ad.model_name}</h3>
                            <img style={{width: "250px", height: "200px", border: "2px solid #000000BB"}} src={ad.advertisement_photo} ></img>
                            <p>Гориво: {ad.fuel_name}</p>
                            <p>Цена: {ad.advertisement_price} лв</p>
                            <p>Година: {ad.advertisement_year}</p>
                            <p>Описание: {ad.advertisement_description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Няма намерени обяви</p>
            )}
        </div>
    );
};

export default AdList;
//