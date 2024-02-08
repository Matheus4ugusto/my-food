export interface ImageDTO {
    id: string;
    url: string;
    name: string
}

export interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: ImageDTO[];
    description: string;
}