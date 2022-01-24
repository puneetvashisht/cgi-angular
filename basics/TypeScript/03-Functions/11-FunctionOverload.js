/*
function getTitles(author: string):stirng[]{
    let foundTitles:string[] = [];
    //get books by author name
    return foundTitles;
}
function getTitles(isAvailable: boolean):string[]{
    let foundTitles:string[] = [];
    //get books by isAvailable property
    return foundTitles;
}
*/
function GetTitles(author) { }
;
function GetTitles(bookProperty) {
    var foundTitles = [];
    if (typeof bookProperty === 'string') {
    }
    else if (typeof bookProperty === 'boolean') {
    }
    return foundTitles;
}
/*
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string') {
        // get all books by a particular author
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    else if(typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
*/
