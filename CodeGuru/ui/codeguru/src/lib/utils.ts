/** CodeGuru/ui/codeguru/src/lib/utils.ts */

interface CodeSnippet {
  id: number;
  title: string;
  language: string;
  description: string;
}

/**
 * Sorts an array of CodeSnippet objects by a given property.
 * @param snippets Array of CodeSnippet objects to sort
 * @param sortBy Property to sort by (e.g., 'title')
 * @param ascending Whether to sort in ascending order (default: true)
 * @returns Sorted array of CodeSnippet objects
 */
export const sortCodeSnippets = (
  snippets: CodeSnippet[],
  sortBy: string,
  ascending: boolean = true
): CodeSnippet[] => {
  return snippets.sort((a, b) => {
    const fieldA = a[sortBy].toLowerCase();
    const fieldB = b[sortBy].toLowerCase();
    if (fieldA < fieldB) {
      return ascending ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
};

/**
 * Paginates an array of CodeSnippet objects based on page size and current page.
 * @param snippets Array of CodeSnippet objects to paginate
 * @param pageSize Number of items per page
 * @param page Current page number (1-based index)
 * @returns Paginated array of CodeSnippet objects
 */
export const paginateCodeSnippets = (
  snippets: CodeSnippet[],
  pageSize: number,
  page: number
): CodeSnippet[] => {
  const startIndex = (page - 1) * pageSize;
  return snippets.slice(startIndex, startIndex + pageSize);
};

/**
 * Filters an array of CodeSnippet objects based on search query, language, category, and tag filters.
 * @param snippets Array of CodeSnippet objects to filter
 * @param searchQuery Search query string
 * @param language Language filter string
 * @param category Category filter string
 * @param tag Tag filter string
 * @returns Filtered array of CodeSnippet objects
 */
export const filterCodeSnippets = (
  snippets: CodeSnippet[],
  searchQuery: string,
  language: string,
  category: string,
  tag: string
): CodeSnippet[] => {
  return snippets.filter((snippet) => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = language === '' || snippet.language.toLowerCase() === language.toLowerCase();
    const matchesCategory = category === '' || snippet.category.toLowerCase() === category.toLowerCase();
    const matchesTag = tag === '' || snippet.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase());
    return matchesSearch && matchesLanguage && matchesCategory && matchesTag;
  });
};
