//This file used to have seperate functions for compolex logic in mapstatetoprops.
//Since it can be used by test files as well.

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
        value: author.id,
        text: author.firstName + " " + author.lastName
    };
});
}