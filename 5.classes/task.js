class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state *= 1.5;
      }
      set state(newState) {
        if (newState < 0) {
          this._state = 0;
        } else if (newState > 100) {
          this._state = 100;
        } else {
          this._state = newState;
        }
      }
      get state() {
        return this._state;
      }
    }
    class Magazine extends PrintEditionItem {
        constructor (name, releaseDate, pagesCount){
            super (name, releaseDate, pagesCount)
            this.type = "magazine";
        } 
    }
    class Book extends PrintEditionItem {
        constructor (name, releaseDate, pagesCount) {
            super (name, releaseDate, pagesCount)
            this.author = author;
            this.type = "book"; 
        }
    }
    class NovelBook extends Book {
        constructor (autor, name, releaseDate, pagesCount) {
            super (autor, name, releaseDate, pagesCount)
            this.type = "novel"; 
        }
    }
    class FantasticBook extends Book {
        constructor (autor, name, releaseDate, pagesCount) {
            super (autor, name, releaseDate, pagesCount)
            this.type = "fantastic"; 
        }
    }
    class DetectiveBook extends Book {
        constructor (autor, name, releaseDate, pagesCount) {
            super (autor, name, releaseDate, pagesCount)
            this.type = "detective"; 
        }
    }
    class Library {
        constructor(name) {
          this.name = name;
          this.books = [];
        }
      
        addBook(book) {
          if (book.state > 30) {
            this.books.push(book);
          }
        }
      
        findBookBy(type, value) {
          const book = this.books.find(b => b[type] === value);
          return book;
        }
      
        giveBookByName(bookName) {
          const foundBook = this.findBookBy("name", bookName);
          if (foundBook) {
            const removedBook = this.removeBook(foundBook);
            return removedBook;
          } else {
            return null;
          }
        }
      }


      
    