import React from 'react';

const agents = [
  {
    id: 1,
    name: 'Arafa El Sherief',
    image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/arafaelsherief-270x340.png',
    properties: 4,
    contact: 'mailto:arafa@example.com'
  },
  {
    id: 2,
    name: 'Fatma Ghaly',
    image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/ayamagdy-270x340.png',
    properties: 4,
    contact: 'mailto:fatma@example.com'
  },
  {
    id: 3,
    name: 'Abody Swedey',
    image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/arafasherie-270x340.png',
    properties: 5,
    contact: 'mailto:abody@example.com'
  },
  {
    id: 4,
    name: 'Magdy Aya',
    image: 'https://beyot.g5plus.net/main/wp-content/uploads/2017/01/modymagdy-270x340.png',
    properties: 4,
    contact: 'mailto:magdy@example.com'
  },
];

const AgentCard = ({ agent }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center mb-4 w-60 cursor-pointer hover:shadow-2xl transition-shadow duration-300">
    <div className="flex justify-center mt-4">
      <img 
        src={agent.image} 
        alt={agent.name} 
        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
      />
    </div>
    <div className="bg-black text-white py-2">
      <h2 className="text-lg font-bold">{agent.name}</h2>
      <p className="text-sm">{agent.properties} properties</p>
    </div>
    <div className="flex justify-center space-x-2 py-2">
      <a href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="text-orange-500"><i className="fab fa-twitter"></i></a>
      <a href="#" className="text-orange-500"><i className="fab fa-linkedin-in"></i></a>
      <a href={agent.contact} className="text-orange-500"><i className="fas fa-envelope"></i></a>
    </div>
  </div>
);

const AgentsList = () => (
  <div className="min-h-screen bg-gray-100">
    <header className="text-center mb-8 bg-black h-[100px] flex justify-center items-center">
      <h1 className="text-4xl font-bold text-white">Agents List</h1>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center pl-20">
      {agents.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  </div>
);

export default AgentsList;
