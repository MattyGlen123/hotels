export const mockHotel = {
    hotelId: '1',
    name: 'Iberostar Grand Salome',
    location: 'Costa Adeje, Tenerife',
    stars: 5,
    passengers: {
        adults: 2,
        children: 2,
        infants: 1
    },
    date: '3rd July 2019',
    duration: 7,
    departingLocation: 'East Midlands',
    price: 1136.5,
    overview: 'Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs.',
    image: {
        src: '/hotel-image-1.png',
        alt: 'Hotel Iberostar Grand Salome'
    },
    pricePerNight: 130
};
export const mockHotels = [
    mockHotel,
    {
        hotelId: '2',
        name: 'Las Piramides Resort',
        location: 'Playa De Las Américas, Tenerife',
        stars: 3,
        passengers: {
            adults: 2,
            children: 1
        },
        date: '3rd July 2019',
        duration: 7,
        departingLocation: 'Manchester',
        price: 499.99,
        pricePerNight: 50,
        overview: 'Step out of your spacious room and straight onto the bustling Veronicas Strip with this perfectly located Aparthotel. With 2 outdoor pools you’ll have plenty of space for sunbed lounging + daytime dips. There’s even a handy poolside bar – ideal for grazing the afternoon away.',
        image: {
            src: '/hotel-image-3.png',
            alt: 'Iberostar Las Piramides Resort'
        }
    },
    {
        hotelId: '3',
        name: 'Aguamarina Golf Hotel',
        location: 'Golf Del Sur, Tenerife',
        stars: 4,
        pricePerNight: 100,
        passengers: {
            adults: 2,
            children: 2
        },
        date: '27th May 2019',
        duration: 7,
        departingLocation: 'Liverpool',
        price: 696.8,
        overview: 'The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
        image: {
            src: '/hotel-image-2.png',
            alt: 'Hotel Aguamarina Golf'
        }
    }
];
