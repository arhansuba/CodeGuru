/** CodeGuru/ui/codeguru/src/lib/actions.ts */

import { useState, useEffect } from 'react';

interface CodeSnippet {
  id: number;
  title: string;
  language: string;
  description: string;
}

const useCodeSnippets = () => {
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const fetchCodeSnippets = async (reset?: boolean) => {
    try {
      if (reset) {
        setPage(1);
      }
      setLoading(true);
      const params = {
        search: searchQuery,
        language: languageFilter,
        category: categoryFilter,
        tag: tagFilter,
        page,
      };
      const queryParams = new URLSearchParams(params).toString();
      const response = await fetch(`/api/code-snippets?${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch code snippets');
      }
      const data = await response.json();
      setCodeSnippets((prevSnippets) =>
        reset ? data.codeSnippets : [...prevSnippets, ...data.codeSnippets]
      );
      setHasMore(data.hasMore);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodeSnippets(true);
  }, [searchQuery, languageFilter, categoryFilter, tagFilter, page]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleLanguageFilterChange = (value: string) => {
    setLanguageFilter(value);
  };

  const handleCategoryFilterChange = (value: string) => {
    setCategoryFilter(value);
  };

  const handleTagFilterChange = (value: string) => {
    setTagFilter(value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    codeSnippets,
    loading,
    error,
    hasMore,
    fetchCodeSnippets,
    handleSearchChange,
    handleLanguageFilterChange,
    handleCategoryFilterChange,
    handleTagFilterChange,
    handlePageChange,
  };
};

export default useCodeSnippets;
