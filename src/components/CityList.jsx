import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first cityu by clicking on a city on the map " />
    );
  return (
    <ul className={styles.cityList}>
      {console.log(cities)}
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
