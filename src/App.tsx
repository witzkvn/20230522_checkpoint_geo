import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContinentsList from "./pages/ContinentsList";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={ContinentsList} />
                    <Route
                        path="/continents/:continentCode"
                        Component={CountriesList}
                    />
                    <Route
                        path="/continents/:continentCode/countries/:countryCode"
                        Component={CountryDetails}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
