import React from 'react';
import { MapPin, Users, ExternalLink, Bed, Home } from 'lucide-react';

export function AccommodationSection() {
  const ourAccommodation = [
  {
    name: "Cellar in Town",
    description: "Cozy accommodation in the heart of Robertson",
    address: "3 Albert St, Robertson, 6705",
    link: "https://www.google.com/maps/search/?api=1&query=3+Albert+St+Robertson+6705",
    distance: "In Robertson town center",
    price: "R1,500 per room per night (sleeps 2)"
  },
  {
    name: "Hygge House",
    description: "Comfortable and welcoming guest house",
    address: "52 Albert St, Robertson, 6705",
    link: "https://www.google.com/maps/search/?api=1&query=52+Albert+St+Robertson+6705",
    distance: "In Robertson town center",
    price: "R1,500 per room per night (sleeps 2)"
  }
];

  const recommendedPlaces = [
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
            Beuld Venue is located about 4km outside of Robertson. 
            We've handpicked wonderful places for you to stay during our celebration.
          </p>
        </div>

        {/* Our Accommodation Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif text-slate-800 text-center mb-4">
            Available Through Us
          </h3>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            We have secured accommodation at these two properties. Indicate your preference when completing your RSVP.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ourAccommodation.map((place, index) => (
              <a
                key={index}
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-rose-50 to-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-rose-200 hover:border-rose-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Home className="w-7 h-7 text-rose-500 flex-shrink-0" />
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                </div>
                <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">
                    {place.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-2">{place.description}</p>
                  <p className="text-sm font-semibold text-rose-600 mb-2">{place.price}</p>
                  <p className="text-xs text-slate-700 font-medium mb-1">{place.address}</p>
                  <p className="text-xs text-slate-500 italic">{place.distance}</p>
              </a>
            ))}
          </div>
        </div>
       
        {/* Recommended Places */}
        <div>
          <h3 className="text-2xl font-serif text-slate-800 text-center mb-4">
            Other Recommended Places
          </h3>
          <p className="text-center text-slate-600 mb-8">
            If you prefer to arrange your own accommodation, here are some excellent options in the area.
          </p>
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