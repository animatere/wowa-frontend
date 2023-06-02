export interface Card {
    id: string;
    type: string;
    cardText: string;
    category: string;
}

export interface User {
    id: string;
    userRole: string;
    userName: string;
    userPassword: string;
}