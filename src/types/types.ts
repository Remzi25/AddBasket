export interface ShopParams {
    id: string,
    name: string;
}

export interface CategoryParams {
    id: string,
    name: string;
}

export interface ProductParams  {
    id: string,
    name: string,
    shop: string,
    category: string,
    isBought?: boolean;
}