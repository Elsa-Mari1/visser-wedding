import React from 'react';
import { MapPin, Users, ExternalLink, Bed } from 'lucide-react';

export function AccommodationSection() {


//   const bookingPlatforms = [
//     {
//       name: "Airbnb",
//       link: "https://www.airbnb.com/s/Robertson--South-Africa",
//       description: "Many options available"
//     },
//     {
//       name: "Booking.com",
//       link: "https://www.booking.com/searchresults.html?ss=Robertson%2C+Western+Cape%2C+South+Africa",
//       description: "Wide selection of properties"
//     },
//     {
//       name: "LekkeSlaap",
//       link: "https://www.lekkeslaap.co.za/akkommodasie-in/robertson",
//       description: "Local SA accommodation"
//     }
//   ];

 const recommendedPlaces = [
  {
    name: "The Robertson Small Hotel",
    description: "Luxurious accommodation in the heart of Robertson",
    link: "https://www.therobertsonsmallhotel.com",
    distance: "In Robertson town center"
  },
  {
    name: "Mo & Rose at Soekershof",
    description: "Stylish guesthouse surrounded by succulents",
    link: "https://www.moandrose.co.za",
    distance: "Surrounded by succulents"
  },
  {
    name: "Galloway Guest House",
    description: "Peaceful accommodation with a beautiful garden",
    link: "https://www.gallowayguesthouse.co.za",
    distance: "Beautiful garden setting"
  },
  {
    name: "Robertson Grand Hotel",
    description: "Local luxury in the heart of town",
    link: "https://thegrandhotel.co.za",
    distance: "Local luxury in town"
  },
  {
    name: "Pat Busch Mountain Reserve",
    description: "A paradise for nature lovers",
    link: "https://www.patbusch.co.za",
    distance: "Nature lover's paradise"
  },
  {
    name: "Orange Grove Farm",
    description: "Luxury farm accommodation in breathtakingly beautiful surroundings",
    link: "https://www.orangegrovefarm.co.za",
    distance: "Luxury farm accommodation"
  },
  {
    name: "Ballinderry",
    description: "Comfortable accommodation near the center of town",
    link: "https://www.ballinderryguesthouse.com",
    distance: "Near town center"
  },
  {
    name: "Die Laaitjie",
    description: "Peaceful self-catering cottages on a working farm",
    link: "https://www.dielaaitjie.co.za",
    distance: "Working farm stay"
  },
  {
    name: "Randrivier",
    description: "Private room with fabulous reviews",
    link: "https://www.booking.com/searchresults.html?ss=Randrivier+Robertson",
    distance: "1.1 miles from centre"
  },
  {
    name: "House of Pinardt",
    description: "Private room in town with superb ratings",
    link: "https://www.booking.com/searchresults.html?ss=House+of+Pinardt+Robertson",
    distance: "200 yards from centre"
  },
  {
    name: "15 On Le Roux",
    description: "Entire apartment with exceptional reviews",
    link: "https://www.booking.com/searchresults.html?ss=15+On+Le+Roux+Robertson",
    distance: "350 yards from centre"
  },
  {
    name: "Angel 8 AirBnB Apartment 2",
    description: "Entire apartment with fabulous reviews",
    link: "https://www.booking.com/searchresults.html?ss=Angel+8+AirBnB+Robertson",
    distance: "0.9 miles from centre"
  },
  {
    name: "Croxley Farm",
    description: "Entire bungalow with superb reviews",
    link: "https://www.booking.com/searchresults.html?ss=Croxley+Farm+Robertson",
    distance: "2.1 miles from centre"
  },
  {
    name: "GuBas De Hoek Meet Eat Sleep",
    description: "Private room with superb ratings",
    link: "https://www.booking.com/searchresults.html?ss=GuBas+De+Hoek+Robertson",
    distance: "0.3 miles from centre"
  }
];

  return (
    <section id="accommodation" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">
            Accommodation
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Beuld Venue is located in Robertson, between McGregor and Robertson. 
            We've handpicked wonderful places for you to stay during our celebration.
          </p>
        </div>


       
        {/* Recommended Places */}
        <div>
          <h3 className="text-2xl font-serif text-slate-800 text-center mb-8">
            Our Recommended Places
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedPlaces.map((place, index) => (
              <a
                key={index}
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-rose-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Bed className="w-6 h-6 text-rose-400 flex-shrink-0" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {place.name}
                </h4>
                <p className="text-sm text-slate-600 mb-2">{place.description}</p>
                <p className="text-xs text-slate-500 italic">{place.distance}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 italic">
            Please book your accommodation early as Robertson is a popular destination, 
            especially during wedding season.
          </p>
        </div>
      </div>
    </section>
  );
}