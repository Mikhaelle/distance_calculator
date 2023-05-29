import React from "react";
import {createHashRouter} from "react-router-dom";
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
        }
]);

