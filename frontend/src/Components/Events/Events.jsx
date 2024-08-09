import React from 'react';
import './Events.css';

const services = [
  {
    title: 'Event Planning',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1714229505922-0ab8148bc2bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "Creating a detailed event strategy, from initial concept to execution, including scheduling, theme development, and logistics to ensure a smooth and successful event. ",
  },
  {
    title: 'Venue Management',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1722168614154-60badae538c1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "Identifying and securing the ideal venue, managing venue setup, and handling contracts and arrangements to align with event requirements.",
  },
  {
    title: 'Technical Support',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682434069726-0434ad0e9d58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "Setting up and managing audio-visual equipment, such as microphones, projectors, and lighting, to ensure that all technical aspects of the event function properly.",
  }
];

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h2 className="services-main-title">OUR SERVICES</h2> {/* Main heading */}
      <div className="services-items">
        {services.map((service, index) => (
          <a key={index} href={service.link} className="service-item">
            <div className="service-image-container">
              <img src={service.imageUrl} alt={service.title} className="service-image" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
