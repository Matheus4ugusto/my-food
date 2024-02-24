export interface ImageDTO {
    id: string;
    url: string;
    name: string
}

export interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: ImageDTO[];
    description: string;
    store_id?: number
}

export interface StoreProps {
    id: number;
    logo: string;
    name: string;
    description: string;
    delivery_time: string;
    avaliation: number
}

export interface StoreContextProps {
    stores: StoreProps[];
    products: ProductCardProps[];
    addCart: (product: ProductCardProps) => void;
    removeCart: (id: number) => void
    cartProducts: CartProduct[]
}

export interface CartProduct extends ProductCardProps {
    amount: number
}