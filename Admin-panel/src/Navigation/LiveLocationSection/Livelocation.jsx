import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LiveLocation() {
  const googleMapsAPIKey = "AIzaSyB3TAfZvfNNppv2TzQyLqkfTO9Xr7GcFbI"; 

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="card p-4 shadow-sm">
      <h5 className="text-center fw-bold">Live Location</h5>
      {location ? (
        <iframe
          title="Live Location"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsAPIKey}&q=${location.latitude},${location.longitude}`}
          width="100%"
          height="300"
          className="rounded"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <p className="text-center">Fetching location...</p>
      )}
    </div>
  );
}

export default LiveLocation;
