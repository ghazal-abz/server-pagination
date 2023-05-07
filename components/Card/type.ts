export interface CardItems {
    mobile: string;
    email: string;
    skills: string;
    name: string;
    imageUrl: string;
}

export interface CardItem {
    cardItems?: Array<CardItems>;
}
