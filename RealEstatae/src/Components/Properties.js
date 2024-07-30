import React, { useState } from 'react';

const Properties = () => {
  const [isForSale, setIsForSale] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;

  const forRentProperties = [
    {
      id: 1,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/02/property-14-330x180.jpg'
    },
    {
      id: 2,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-50-330x180.jpg'
    },
    {
      id: 3,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-42-330x180.jpg'
    },
    {
      id: 4,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-33-330x180.jpg'
    },
    {
      id: 5,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-11-330x180.jpg'
    },
    {
      id: 6,
      title: 'Single House Near, Los Angeles',
      price: '$3 K / Month',
      address: '1911 Sunset Blvd Los Angeles, CA 90026',
      type: 'House',
      agent: 'Abody Swedey',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '185 SqFt',
      beds: 3,
      baths: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-09-330x180.jpg'
    },
  ];

  const forSaleProperties = [
    {
      id: 1,
      title: 'Apartment Modern Santa Monica, Los Angeles',
      price: 'Start from $136,020',
      address: '6511 Santa Monica Blvd Los Angeles, CA 90038',
      type: 'Apartment',
      agent: 'Arafa El Sherief',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '326 SqFt',
      beds: 4,
      baths: 3,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-44-330x180.jpg'
    },
    {
      id: 2,
      title: 'Apartment Modern Santa Monica, Los Angeles',
      price: 'Start from $136,020',
      address: '6511 Santa Monica Blvd Los Angeles, CA 90038',
      type: 'Apartment',
      agent: 'Arafa El Sherief',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '326 SqFt',
      beds: 4,
      baths: 3,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-01-1-330x180.jpg'
    },
    {
      id: 1,
      title: 'Apartment Modern Santa Monica, Los Angeles',
      price: 'Start from $136,020',
      address: '6511 Santa Monica Blvd Los Angeles, CA 90038',
      type: 'Apartment',
      agent: 'Arafa El Sherief',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '326 SqFt',
      beds: 4,
      baths: 3,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-44-330x180.jpg'
    },
    {
      id: 2,
      title: 'Apartment Modern Santa Monica, Los Angeles',
      price: 'Start from $136,020',
      address: '6511 Santa Monica Blvd Los Angeles, CA 90038',
      type: 'Apartment',
      agent: 'Arafa El Sherief',
      description: 'Solum vidisse eum ea. Ei solum essent delicata mei, ad quis quaerendum est. Usu accumsan iudicabit cu, an his ferri legere.',
      sqft: '326 SqFt',
      beds: 4,
      baths: 3,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-01-1-330x180.jpg'
    },
  ];

  const properties = isForSale ? forSaleProperties : forRentProperties;
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-full">
      <div className='relative w-full h-[200px] flex flex-col justify-center items-center text-center fixed'
        style={{
          backgroundImage: 'url(https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-29-330x180.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <h2 className="text-4xl font-bold mb-1 text-white relative z-1">
          <span className='text-orange-600'>L</span>isting 
        </h2>
        <h2 className="text-4xl font-bold text-white relative z-10">
          <span className='text-orange-600'>P</span>roperties
        </h2>
      </div>
      <div className="flex h-[calc(100%-200px)]">
        <div className="w-1/5 bg-gray-400 p-4 h-full">
          <div className="mb-4">
            <button
              className={`w-full px-4 py-2 mb-2 rounded ${!isForSale ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'} hover:bg-orange-600`}
              onClick={() => {
                setIsForSale(false);
                setCurrentPage(0); 
              }}
            
            >
              For Rent
            </button>
            <button
              className={`w-full px-4 py-2 rounded ${isForSale ? 'bg-black text-white' : 'bg-gray-300 text-black'} hover:bg-gray-800`}
              onClick={() => {setIsForSale(true);
                setCurrentPage(0);}
              }
            >
              For Sale
            </button>
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border rounded">
              <option>All Types</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="text" className="w-full p-2 border rounded" placeholder="Address" />
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border rounded">
              <option>Any Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
            </select>
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border rounded">
              <option>Any Bathrooms</option>
              <option>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3 Bathrooms</option>
            </select>
          </div>
          <div className="mb-4">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
          </div>
        </div>
        <div className="ml-1/5 w-4/5 bg-gray-100 p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Properties</h1>
            <div>
              <button
                className={`px-4 py-2 rounded ${!isForSale ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'} hover:bg-orange-600`}
                onClick={() => setIsForSale(false)}
              >
                For Rent
              </button>
              <button
                className={`px-4 py-2 rounded ${isForSale ? 'bg-black text-white' : 'bg-gray-300 text-black'} hover:bg-gray-800`}
                onClick={() => setIsForSale(true)}
              >
                For Sale
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex mb-4 w-full">
    <img src={property.image} alt="Property" className="w-45 h-auto object-cover" />
    <div className="flex-1 p-4">
      <h2 className="text-lg font-bold">{property.title}</h2>
      <p className="text-orange-500 text-sm">{property.price}</p>
      <p className="text-sm">{property.address}</p>
      <p className="text-sm">{property.type} by {property.agent}</p>
      <p className="text-gray-600 text-xs">{property.description}</p>
      <div className="flex justify-between items-center mt-2 text-xs">
        <span>{property.sqft}</span>
        <span>{property.beds} Beds</span>
        <span>{property.baths} Baths</span>
      </div>
    </div>
  </div>
);

export default Properties;
