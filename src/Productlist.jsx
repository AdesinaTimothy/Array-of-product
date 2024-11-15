import Productcard from "./Productcard.jsx"
import { perfumeProducts } from "./PerfumeData.js"

const Productlist = () => {

    return (
        
        <div>
            {perfumeProducts.map((product) => (
                <Productcard 
                key = {product.id}
                products = {product}
                />
            ))}
        </div>
        
        
    );
}

export default Productlist