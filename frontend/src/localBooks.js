export function getBooks() {
  const books = localStorage.getItem('books');
  return books ? JSON.parse(books) : [];
}

export function saveBook(book) {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}