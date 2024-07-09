/** discover/page.tsx */

import React, { useState, useEffect } from 'react';
import { Container, Grid, Header, Input, Button, Card, Icon } from 'emantic-ui-react';
import { useDebounce } from 'use-debounce';

interface CodeSnippet {
  id: number;
  title: string;
  language: string;
  description: string;
}

const DiscoverPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    fetchCodeSnippets();
  }, [debouncedSearchQuery, languageFilter, tagFilter, categoryFilter, page]);

  const fetchCodeSnippets = async () => {
    const response = await fetch('/api/code-snippets', {
      method: 'GET',
      params: {
        search: debouncedSearchQuery,
        language: languageFilter,
        tag: tagFilter,
        category: categoryFilter,
        page,
      },
    });
    const data = await response.json();
    setCodeSnippets(data.codeSnippets);
    setHasMore(data.hasMore);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageFilter(e.target.value);
  };

  const handleTagFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTagFilter(e.target.value);
  };

  const handleCategoryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container fluid>
      <Header as="h1">Discover Code Snippets</Header>
      <p>Explore and find code snippets to help you build faster and better.</p>

      <Grid columns={2}>
        <Grid.Column>
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search code snippets"
          />
        </Grid.Column>
        <Grid.Column>
          <Button.Group>
            <Button onClick={() => setLanguageFilter('')}>All Languages</Button>
            <Button onClick={() => setLanguageFilter('javascript')}>JavaScript</Button>
            <Button onClick={() => setLanguageFilter('python')}>Python</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        <Grid.Column>
          <Button.Group>
            <Button onClick={() => setTagFilter('')}>All Tags</Button>
            <Button onClick={() => setTagFilter('react')}>React</Button>
            <Button onClick={() => setTagFilter('nodejs')}>Node.js</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group>
            <Button onClick={() => setCategoryFilter('')}>All Categories</Button>
            <Button onClick={() => setCategoryFilter('web-development')}>Web Development</Button>
            <Button onClick={() => setCategoryFilter('machine-learning')}>Machine Learning</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>

      <Grid columns={3}>
        {codeSnippets.map((snippet) => (
          <Grid.Column key={snippet.id}>
            <Card>
              <Card.Content>
                <Card.Header>{snippet.title}</Card.Header>
                <Card.Meta>
                  <span>{snippet.language}</span>
                </Card.Meta>
                <Card.Description>{snippet.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button icon="copy" />
                  <Button icon="save" />
                  <Button icon="eye" />
                </Button.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>

      {hasMore && (
        <Button onClick={() => handlePageChange(page + 1)}>Load More</Button>
      )}
    </Container>
  );
};

export default DiscoverPage;