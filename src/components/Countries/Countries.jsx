import { useEffect, useState } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(() => {
        fetch("/api/countries/v5?limit=100&api-key=rc_live_57274abf5100499a83a61bd712fd34d3")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.data.objects);
            });
    }, []);

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    return (
        <div>
            <div>
                <h4>Visited Countries: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map((country) => 
                            <li 
                            key={country.codes.alpha_2}
                            >{country.names.common}</li>
                        )
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.codes.alpha_2}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;