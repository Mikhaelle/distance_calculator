import React from "react";
import {createHashRouter} from "react-router-dom";
import {DistanceCalculatorContainer} from "./scenes/DistanceCalculatorScene/DistanceCalculatorContainer";
import {CalculationsResultsScene} from "./scenes/CalculationsResultsScene/CalculationsResultsScene";

export const Router = createHashRouter([
        {
            path: "/",
            element: <DistanceCalculatorContainer/>,

        },
        {
            path: "/results",
            element: <CalculationsResultsScene/>,
        }
]);

