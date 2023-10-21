import React from 'react';
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'
import {NavigationProvider} from './context/navigation';
import { RecipeProvider } from './context/recipes';

const el = document.getElementById("root");
const root  = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <RecipeProvider>
            <App />
        </RecipeProvider>
    </NavigationProvider>
)