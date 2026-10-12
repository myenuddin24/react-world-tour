import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {names, flag, area, codes} = country;

    const [visited, setVisited] = useState(false);
    const [marked, setMarked] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const markAsVisited = () => {
        handleVisitedCountry(country);
        setMarked(true);
    }

    return (
        <div className="country">
            <h3>Name: {names?.common}</h3>
            <img className='img-size' src={flag?.url_png} alt={`${names?.common}'s_flag`} />
            <p>Area: {area?.kilometers} square km</p>
            <p>Country code: {codes?.alpha_2 ? codes.alpha_2 : "N/A"}</p>
            <button className={`btn ${visited ? 'visited' : 'visit'}`} onClick={handleVisited}>{visited ? "Visited" :  "Visit"}</button>
            <button 
            className={`btn ${marked ? 'visited' : 'visit'}`} 
            onClick={markAsVisited}
            disabled={marked}
            >Mark as Visited</button>
        </div>
    );
};

export default Country;