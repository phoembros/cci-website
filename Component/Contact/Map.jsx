import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLocation,
} from "react-icons/io5";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {

  const defaultProps = {
    center: {
      lat: 13.347964962666703,
      lng: 103.84405281311926,
    },
    zoom: 17,
  };
  

  return (
    <div className="map-container">
      <div className="map-item">
        <Box className="map-title">ស្វែងរកពួកយើងក្នុង Google Map</Box>
        <Box width="100%" h="525px" mt={5}>
            <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCPy78uNk-DG98yYv7bGEWt3SCidRf0dms",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                  lat={13.347996279852236}
                  lng={103.8440313555189}
                  text={
                    <a>
                      <Icon fontSize="30px" as={IoLocation} />
                    </a>
                  }
                />
            </GoogleMapReact>
        </Box>
      </div>
    </div>
  );
}
