import React from 'react';

const MyMapComponent = () => {
  const iframeSrc = "https://www.google.com/maps/d/embed?mid=1NnDONa8bQsDqlD3-uHjF-oos10udZeoj&ehbc=2E312F"; // Reemplaza esto con tu enlace de iframe

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MyMapComponent;
