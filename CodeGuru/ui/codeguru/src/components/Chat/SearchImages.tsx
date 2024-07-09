import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchImages.css';

interface Image {
  id: string;
  url: string;
  thumbnailUrl: string;
  title: string;
}

const SearchImages: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: searchQuery,
              orientation: 'squarish',
              count: 20,
            },
            headers: {
              Authorization: 'Client-ID YOUR_UNSPLASH_API_KEY',
            },
          });
          const images = response.data.results.map((image: { id: any; urls: { full: any; thumb: any; }; description: any; }) => ({
            id: image.id,
            url: image.urls.full,
            thumbnailUrl: image.urls.thumb,
            title: image.description,
          }));
          setImages(images);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchImages();
  }, [searchQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.searchQuery.value);
  };

  return (
    <div className="search-images">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="searchQuery"
          placeholder="Search for images"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="image-list">
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.thumbnailUrl} alt={image.title} />
              <p>{image.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchImages;