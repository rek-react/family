import { useMemo } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.scss";

const GoogleMap = () => {
  const defaultProps = useMemo(
    () => ({
      center: {
        lat: 58.59765,
        lng: 49.647954,
      },
      zoom: 11,
    }),
    []
  );
  return (
    <div className="google-map">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        bootstrapURLKeys={{ key: "" }}
      />
    </div>
  );
};
export default GoogleMap;
