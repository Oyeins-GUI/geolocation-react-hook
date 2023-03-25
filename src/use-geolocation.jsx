import { useState, useEffect } from "react";

const UseGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
  });

  const success = (position) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      },
    });
  };

  const error = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      error({
        code: 0,
        message: "Geolocation is not enabled",
      });
      // setLocation((state) => ({
      //   ...state,
      //   loaded: true,
      //   coordinates: {
      //     lat: position.coords.latitude,
      //     long: position.coords.longitude,
      //   },
      // }));
    }

    // console.log(navigator.geolocation.getCurrentPosition(success, error));
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return location;
};

export default UseGeoLocation;
