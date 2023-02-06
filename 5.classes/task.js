class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
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
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание 2

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
        if (this.books.find((book) => book[type] === value) != undefined) {
            return book;
        } else {
            return null;
        }      
    }
// Эти два метода не работают, не понимаю почему ????????????????????????????
    giveBookByName(bookName) {
        let thisBook = this.book.findIndex((book) => book.name === bookName);
            if (thisBook > -1) {
                this.books.splice(thisBook, 1);
                return thisBook;
            } else {
                return null;
            }
        }
}

// Задание 3
  
class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
    //     if (this.marks[subjectName] === undefined) {
    //         this.marks[subjectName] = [];
    //     }

    //    Когда проверка наличия предмета стоит отдельно, могут быть некорректные значения "mark" , в тестах пустой массив можно добавить при данном варианте

    //     if (mark >= 2 && mark <= 5) {   
    //         this.marks[subjectName].push(mark);
    //     } else {  
    //         console.log("Оценка не добавится")
    //         return;
    //     }   
    // }

    

    if (mark >= 2 && mark <= 5) {
        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }   
        this.marks[subjectName].push(mark);
    } else {  
        console.log("Оценка не добавится")
        return;
    }   
}

    getAverageBySubject(subjectName) {
        let result;

        if (this.marks[subjectName] === undefined) {
            return 0;
        } else {
            result = this.marks[subjectName].reduce((acc, item, index, subjectName) => {
                acc += item;
                if (index === subjectName.length - 1) {
                    return acc / subjectName.length;
                }
                return acc;
            }, 0);
            return result;
        }
    }

    getAverage() {
        let summSubject = Object.keys(this.marks);
        let Summ;
       
        // for (let i = 0; i < summSubject.length; i++) {
        //     Summ += this.getAverageBySubject(summSubject[i]); 
        // }

        // return Summ / summSubject.length;
        // Не работает через цикл почему-то
       
        Summ = summSubject.reduce((acc, item, index, summSubject) => {
            acc += this.getAverageBySubject(item);
            // acc += getAverageBySubject(item); Почему надо использовать при вызове метода ключевое слово "This"
            if (index === summSubject.length - 1) {
                return acc / summSubject.length;
            } 
            return acc;
        }, 0)

        return Summ;
    }


}



