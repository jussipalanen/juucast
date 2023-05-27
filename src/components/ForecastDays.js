
import moment from "moment";
const ForecastDays = (props) => {
    const data = props.data;
    const days = data.forecastday ? data.forecastday : [];

    return (
        <div className="days grid grid-cols-7 gap-7 content-start text-center mt-8 mb-8">
            {days.map(item => {

                let day = item.day ? item.day : [];
                let condition = day.condition ? day.condition : [];

                let maxTemp = Math.round(day.maxtemp_c);
                let maxTempClass = maxTemp > 0 ? 'text-red-500' : 'text-blue-500';
                let maxTempIndicator = maxTemp > 0 ? '+' : '-';


                let minTemp = Math.round(day.mintemp_c);
                let minTempClass = minTemp > 0 ? 'text-red-500' : 'text-blue-500';
                let minTempIndicator = minTemp > 0 ? '+' : '-';

                return (
                    <div className="days__day shadow-lg rounded-lg bg-slate-200">
                        <div className="days__day__content pb-4">
                            <div className="days__day__content--date bg-green-700 p-2 text-white">
                                {moment(item.date).format('D.M.Y')}
                            </div>
                            <div className="days__day__content--icon">
                                <img src={condition.icon} alt={condition.text} className="mx-auto"></img>
                            </div>
                            <div className={`days__day__content--max-temp font-bold ${maxTempClass}`}>
                                Ylin: {maxTempIndicator}{maxTemp}°
                            </div>

                            <div className={`days__day__content--min-temp font-bold ${minTempClass}`}>
                                Alin: {minTempIndicator}{minTemp}°
                            </div>

                            <div className="days__day__content--avg-temp">
                                {day.avgtemp_c}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ForecastDays