import UseGeoLocation from "./use-geolocation";

function App() {
  const location = UseGeoLocation();

  return (
    <>
      <div>
        {location.loaded
          ? "Below is your location"
          : "User location data not provided yet"}
      </div>
      <div>
        <p>Latitude: {location.coordinates.lat}</p>
        <p>Longitude: {location.coordinates.long}</p>
      </div>
    </>
  );
}

export default App;
