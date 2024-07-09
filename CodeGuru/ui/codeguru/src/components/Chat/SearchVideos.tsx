import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './SearchVideos.css';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const SearchVideos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('relevance');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchVideos = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: 'YOUR_YOUTUBE_API_KEY',
              q: searchQuery,
              part: 'id,snippet',
              maxResults: 20,
            },
          });
          const videos = response.data.items.map((video: { id: { videoId: any; }; snippet: { title: any; description: any; thumbnails: { default: { url: any; }; }; }; }) => ({
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnailUrl: video.snippet.thumbnails.default.url,
            videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          }));
          setVideos(videos);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchVideos();
  }, [searchQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.searchQuery.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const filteredVideos = videos.filter((video) => {
    if (filter === 'relevance') return true;
    if (filter === 'title') return video.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'description') return video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return false;
  });

  const sortedVideos = filteredVideos.sort((a, b) => {
    if (sort === 'asc') return a.title.localeCompare(b.title);
    if (sort === 'desc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="search-videos">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="searchQuery"
          placeholder="Search for videos"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="filter-sort">
        <label>
          Filter by:
          <select value={filter} onChange={handleFilterChange}>
            <option value="relevance">Relevance</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="video-list">
          {sortedVideos.map((video) => (
            <li key={video.id}>
              <YouTube videoId={video.id} />
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchVideos;