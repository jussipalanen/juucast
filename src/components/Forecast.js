import ForecastDays from "./ForecastDays";
import SearchLocationForm from "./SearchLocationForm";

const Forecast = (props) => {

    const data = props.data;
    const location = data.location ? data.location : [];
    const forecast = data.forecast ? data.forecast : [];

    return (
        <div className="forecast__heading mt-8 mb-8">
            <h2 className="text-4xl font-semibold dark:text-black">{location.name ? location.name : 'null'}</h2>
            <h3 className="text-2xl">7 päivän ennuste</h3>
            <SearchLocationForm />
            <ForecastDays data={forecast} />
        </div>
    )
}

export default Forecast