import Product from '../model/Product'

const base_path = './../../assets/img/'

const products=[
    new Product(1, "Coca-Cola regular", "Coca-Cola", base_path + 'coca-cola-225.jpg', 150.5),
    new Product(3, "Chocolate barra 200grs", "Coffler", base_path +'cofler_300.jpg', 100),
    new Product(2, "Papel higiénico 4x60mts", "Higienol", base_path +'higienol-4x80.jpg', 80),
]

export class ProductsService{
    getAll(){ return products}
}