export interface Product {
    id: number;
    title: string;
    discountPercentage: number;
    description: string;
    category: string;
    price: number;
    thumbnail: string;
    tags: string[];
}

export interface Option { 
    label: string; 
    value: string; 
}