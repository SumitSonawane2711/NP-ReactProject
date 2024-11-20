import { useState, useEffect } from 'react';

// Data for cards
const initialCardData = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'Get your orders delivered within 24 hours.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },
  {
    id: 2,
    title: 'Quality Products',
    description: 'We provide the best quality products available.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Our team is here to assist you anytime.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },

  {
    id: 4,
    title: '24/7 Support',
    description: 'Our team is here to assist you anytime.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },{
    id: 5,
    title: '24/7 Support',
    description: 'Our team is here to assist you anytime.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },
  {
    id: 5,
    title: '24/7 Support',
    description: 'Our team is here to assist you anytime.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 0,
  },
];

const HomePage = () => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetch using useEffect
  useEffect(() => {
    setTimeout(() => {
      setCardData(initialCardData);
      setIsLoading(false);
    }, 2000);
  }, []);

  // Handle like button
  const handleLike = (id) => {
    const updated = (card) => card.id === id ? { ...card, likes: card.likes + 1 } : card
    const newdata = (prevData) => prevData.map(updated  )
    console.log(updated);
    setCardData( newdata );
    
  };

  // Reset all likes
  const handleResetLikes = () => {
    setCardData((prevData) =>
      prevData.map((card) => ({ ...card, likes: 0 }))
    );
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '20px' }}>
      {/* Banner */}
      <div 
        style={{
          width: '100%',
          height: '200px',
          backgroundImage: `url('https://via.placeholder.com/1200x400')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        Welcome to Our Website
      </div>

      {/* Cards Section */}
      <div style={{ margin: '20px 0' }} >
        <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '15px' }}>
          Our Features
        </h2>

        {
         isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '4px solid #3498db',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                margin: 'auto',
                animation: 'spin 1s linear infinite',
              }}
            />
            <p style={{ marginTop: '10px', color: '#555' }}>Loading...</p>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
              }}
            >
              {cardData.map((card) => (
                <div
                  key={card.id}
                  style={{
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '15px',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                  />
                  <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{card.title}</h3>
                  <p style={{ fontSize: '14px', color: '#555' }}>{card.description}</p>
                  <p style={{ fontSize: '14px', color: '#3498db', margin: '10px 0' }}>
                    {card.likes} Likes
                  </p>
                  <button
                    onClick={() => handleLike(card.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Like
                  </button>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                onClick={handleResetLikes}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Reset All Likes
              </button>
            </div>
          </>
        )}
      </div>

      {/* Profile Card */}
      <div style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto' }}>
        <div
          style={{
            backgroundColor: '#fff',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '15px' }}
          />
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>smith dev</h3>
            <p style={{ color: '#555', marginBottom: '10px' }}>Full-Stack Developer</p>
            <p style={{ color: '#777', fontSize: '14px' }}>
            smith dev specializes in building scalable web applications and enjoys collaborating with
              teams to learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
