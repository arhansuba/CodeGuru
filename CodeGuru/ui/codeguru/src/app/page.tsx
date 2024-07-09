/** app/page.tsx */

import React, { useState, useEffect } from 'react';
import { Container, Grid, Header, Input, Button, Card, Icon } from 'emantic-ui-react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import { useDebounce } from 'use-debounce';

interface CodeSnippet {
  id: number;
  title: string;
  language: string;
  description: string;
}

const AppPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    fetchCodeSnippets();
  }, [debouncedSearchQuery, languageFilter, categoryFilter, tagFilter, page]);

  const fetchCodeSnippets = async () => {
    const response = await fetch('/api/code-snippets', {
      method: 'GET',
      params: {
        search: debouncedSearchQuery,
        language: languageFilter,
        category: categoryFilter,
        tag: tagFilter,
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

  const handleCategoryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleTagFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTagFilter(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // implement sorting logic here
  };

  return (
    <Container fluid>
      <Header as="h1">
        <img src="/logo.png" alt="CodeGuru Logo" />
        CodeGuru
      </Header>

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
            <Button onClick={() => setCategoryFilter('')}>All Categories</Button>
            <Button onClick={() => setCategoryFilter('web-development')}>Web Development</Button>
            <Button onClick={() => setCategoryFilter('machine-learning')}>Machine Learning</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group>
            <Button onClick={() => setTagFilter('')}>All Tags</Button>
            <Button onClick={() => setTagFilter('react')}>React</Button>
            <Button onClick={() => setTagFilter('nodejs')}>Node.js</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>

      <Grid columns={3}>
        {codeSnippets.map((snippet: { id: any; title: any; language: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: any; }) => (
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
                  <Button icon="share" />
                </Button.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>

      {hasMore && (
        <Button onClick={() => handlePageChange(page + 1)}>Load More</Button>
      )}

      <Grid columns={1}>
        <Grid.Column>
          <Button.Group>
            <Button onClick={() => handleSortChange('title')}>Sort by Title</Button>
            <Button onClick={() => handleSortChange('language')}>Sort by Language</Button>
            <Button onClick={() => handleSortChange('category')}>Sort by Category</Button>
            <Button onClick={() => handleSortChange('tag')}>Sort by Tag</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AppPage;
