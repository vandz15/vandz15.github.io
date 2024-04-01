import ProductCard from "@/components/ProductCard";

const ProductList = ({ product }) => {
    return (
        <ul className="recipe-list">
            {product.map((prod, idx) => (
                <ProductCard product={prod} key={idx} />
            ))}
        </ul>
    );
};

export default ProductList;
