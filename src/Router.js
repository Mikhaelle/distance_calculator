import React from "react";
import {createHashRouter, Navigate,} from "react-router-dom";
import {DistanceCalculatorScene} from "./scenes/DistanceCalculatorScene/DistanceCalculatorScene";
import {SearchCalculationsScene} from "./scenes/SearchCalculationsScene/SearchCalculationsScene";

export const Router = createHashRouter([
        {
            path: "/",
            element: <DistanceCalculatorScene/>,

        },
        {
            path: "/search",
            element: <SearchCalculationsScene/>,
        },
        {
            path: "*",
            element: <Navigate to="/" replace />,
        },
]);

