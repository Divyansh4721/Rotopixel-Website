import React from "react";
import { Mail } from "lucide-react";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
function GoogleMapWithInfoWindow() {
  const maps = useMapsLibrary("core");
  if (!maps) return null;
  return (
    <Map
      style={{ width: "100%", height: "100%" }}
      defaultCenter={{ lat: 28.869884, lng: 77.1372094 }}
      defaultZoom={16}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <Marker position={{ lat: 28.869884, lng: 77.1372094 }} />
      <InfoWindow
        position={{ lat: 28.869884, lng: 77.1372094 }}
        options={{
          pixelOffset: new maps.Size(0, -40),
        }}
      >
        <div className="text-sm">
          <strong>RotoPixel Pvt. Ltd.</strong>
          <br />
          77 & 79, Sector 53
          <br />
          Kundli Industrial Area, Sonipat
        </div>
      </InfoWindow>
    </Map>
  );
}
export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-12">
            BE IN TOUCH
          </h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-600 leading-relaxed mb-12">
            <div className="text-center">
              <p>77 & 79, Sector 53, Kundli Industrial Area</p>
              <p>Phase 5, Sonipat, HR 131028</p>
            </div>
            <div className="text-center">
              <p>10, HSIIDC Industrial Area</p>
              <p>Phase 5, Rai, Sonipat, HR 131029</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <Mail size={20} className="text-gray-700" />
            <a
              href="mailto:rotopixel@gmail.com"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              rotopixel@gmail.com
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[500px] bg-gray-300">
          <APIProvider apiKey={"AIzaSyBkkNfBzpEP5NZU7bKC_meJkJeVtbiybeg"}>
            <GoogleMapWithInfoWindow />
          </APIProvider>
        </div>
      </section>
    </main>
  );
}
