import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {Header} from '../../components/header/Header'
import { DistanceCalculatorPresenter } from "./DistanceCalculatorPresenter";
import { NominatimService }  from "../../services/NominatimService/nominatimService"
import { LocalStorageService }  from "../../services/LocalStorageService/LocalStorageService"

export const DistanceCalculatorContainer = () => {
    const navigate = useNavigate();
    const nominatimService = NominatimService.getInstance();
    const localStorageService = LocalStorageService.getInstance();

    const [sourceAddress, setSourceAddress] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [distanceCalculated, setDistanceCalculated] = useState(null);

    const handleSearch = async () => {
        try {
            const sourceData = await nominatimService.getPlaceInfos(sourceAddress)
            const destinationData = await nominatimService.getPlaceInfos(destinationAddress);

            const sourceCoordinates = sourceData.length > 0 ? [sourceData[0].lon, sourceData[0].lat] : null;
            const destinationCoordinates = destinationData.length > 0 ? [destinationData[0].lon, destinationData[0].lat] : null;

            setCoordinates({ source: sourceCoordinates, destination: destinationCoordinates });

            calculateDistance(sourceCoordinates, destinationCoordinates)

        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };
    
    const handleNavigate = () => {
        navigate('/results');
    }

    //Code from chatgpt using the Haversine formula. The distance will be calculated in kilometers.
    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    }

    const calculateDistance = (sourceCoordinates, destinationCoordinates) => {
        const [sourceLon, sourceLat] = sourceCoordinates;
        const [destLon, destLat] = destinationCoordinates;

        const earthRadius = 6371; // Earth's radius in kilometers
        const lonDiff = toRadians(destLon - sourceLon);
        const latDiff = toRadians(destLat - sourceLat);

        const a =
            Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
            Math.cos(toRadians(sourceLat)) *
            Math.cos(toRadians(destLat)) *
            Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = (earthRadius * c).toFixed(2);
        setDistanceCalculated(distance);
        localStorageService.saveSearchInfosInLocalStorage(sourceAddress, destinationAddress, distance)
    }



    return (
        <>
            <Header />
            <DistanceCalculatorPresenter
                sourceAddress={sourceAddress}
                setSourceAddress={setSourceAddress}
                destinationAddress={destinationAddress}
                setDestinationAddress={setDestinationAddress}
                handleSearch={handleSearch}
                handleNavigate={handleNavigate}
                distanceCalculated={distanceCalculated}
            />
        </>
    );

};

