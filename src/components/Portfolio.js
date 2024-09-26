import React, { useState } from 'react';

function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddPortfolio = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('portfolioFile', file);

      try {
        const response = await fetch('http://localhost:5000/api/portfolio/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (response.ok) {
          setPortfolios([...portfolios, result.file.filename]);
        } else {
          alert('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAddPortfolio}>Upload Portfolio</button>

      <ul>
        {portfolios.map((portfolio, index) => (
          <li key={index}>{portfolio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;