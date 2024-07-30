import React, { useState } from 'react';

const Blog = ({navigateTo}) => {
  const [expandedHouseId, setExpandedHouseId] = useState(null);
  const [comments, setComments] = useState({});
  
  const houses = [
    {
      id: 1,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-02.jpg',
      details: 'Beautiful 3-bedroom house with a spacious garden and modern amenities.',
      moreDetails: 'Located in a tranquil neighborhood, this house features an open-concept living area with high-end finishes, a large backyard, and proximity to top-rated schools and parks. The kitchen is equipped with modern appliances and there is a dedicated space for home offices or study.'
    },
    {
      id: 2,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-06-1170x380.jpg',
      details: 'Charming 2-bedroom apartment in the heart of the city.',
      moreDetails: 'This apartment offers breathtaking city views, modern appliances, and easy access to public transportation. It includes a private balcony, in-unit laundry, and access to a rooftop terrace with panoramic views. The building also has a gym and community lounge.'
    },
    {
      id: 3,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2016/11/marshallmasters-71-min-1170x380.jpg',
      details: 'Modern 4-bedroom family home with a home theater and gym.',
      moreDetails: 'This spacious family home features a state-of-the-art home theater, a dedicated gym area, and an expansive open-plan living space. The property includes a beautifully landscaped garden, a large patio for outdoor entertaining, and is located near top-rated schools and family-friendly parks.'
    },
    {
      id: 4,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2016/12/bg_coming_soon-1170x380.jpg',
      details: 'Luxury 5-bedroom mansion with private pool and tennis court.',
      moreDetails: 'This luxurious mansion boasts five large bedrooms, a private swimming pool, and a tennis court. The property features high ceilings, a grand entrance hall, and expansive living areas perfect for hosting large gatherings. It is situated in a prestigious neighborhood with easy access to exclusive clubs and dining options.'
    },
    {
      id: 5,
      image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/property-48-1170x380.jpg',
      details: 'Cozy 1-bedroom cottage with a charming garden.',
      moreDetails: 'This quaint 1-bedroom cottage is perfect for those seeking a peaceful retreat. It includes a cozy living area, a well-equipped kitchen, and a charming garden with a small pond. The property is located in a quiet village with friendly neighbors and is close to nature trails and local markets.'
    },
    // Add more houses as needed
  ];
  
  const handleReadMore = (id) => {
    setExpandedHouseId(id);
  };

  const handleReadLess = () => {
    setExpandedHouseId(null);
  };

  const handlePostComment = (id, comment) => {
    setComments(prevComments => ({
      ...prevComments,
      [id]: [...(prevComments[id] || []), comment]
    }));
  };

  return (
    <div className="p-8">
      <header className="bg-black text-white py-4 text-center mb-8">
        <h1 className="text-3xl font-bold">BLOGS</h1>
      </header>
      <div className="space-y-8">
        {houses.map(house => (
          <div key={house.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={house.image} alt={`House ${house.id}`} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{house.details}</p>
              {expandedHouseId === house.id ? (
                <div>
                  <p className="mb-4">{house.moreDetails}</p>
                  <button
                    onClick={handleReadLess}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Read Less
                  </button>
                  <div className="mt-4">
                    <textarea
                      placeholder="Post a comment"
                      className="w-full p-2 border border-gray-300 rounded mb-2"
                      onBlur={(e) => handlePostComment(house.id, e.target.value)}
                    />
                    <button
                      onClick={() => handlePostComment(house.id, document.querySelector(`textarea`).value)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Post Comment
                    </button>
                    <div className="mt-4">
                      {(comments[house.id] || []).map((comment, index) => (
                        <p key={index} className="bg-gray-100 p-2 rounded mb-2">{comment}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleReadMore(house.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
