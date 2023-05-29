import React from "react";
import {createHashRouter} from "react-router-dom";
import {DistanceCalculatorScene} from "./scenes/DistanceCalculatorScene/DistanceCalculatorScene";
import {CalculationsResultsScene} from "./scenes/CalculationsResultsScene/CalculationsResultsScene";

export const Router = createHashRouter([
        {
            path: "/",
            element: <DistanceCalculatorScene/>,

        },
        {
            path: "/results",
            element: <CalculationsResultsScene/>,
        }
]);

