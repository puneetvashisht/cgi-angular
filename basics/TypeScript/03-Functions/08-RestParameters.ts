function getIssuedBooks(customerName: string, ...bookIds: number[]): void{
    console.log("Customer name is "+customerName);
    console.log("List of issued bookIds "+bookIds);
}

let books = getIssuedBooks("Puneet", 4 , 1, 452);