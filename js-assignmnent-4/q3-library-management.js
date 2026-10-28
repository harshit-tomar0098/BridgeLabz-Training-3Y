// Q3: Library Management System (Classes + Objects)

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = String(isbn);
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }
        this.isIssued = true;
        return `Issued: ${this.title}`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} was not issued.`;
        }
        this.isIssued = false;
        return `Returned: ${this.title}`;
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
    new Book("1984", "George Orwell", "9780451524935"),
    new Book("Clean Code", "Robert C. Martin", "9780132350884", true)
];

function showAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);
    console.log("\\nAvailable books:");
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
    } else {
        availableBooks.forEach(book => console.log(book.getDetails()));
    }
}

function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === String(isbn));
    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    console.log(book.issueBook());
}

showAvailableBooks();
issueBookByISBN("9780451524935");
showAvailableBooks();
