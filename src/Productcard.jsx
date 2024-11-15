 const Productcard = ({products}) => {


    return (
        <div className="productcard">
            <div className="product-image">
                <img 
                    src={products.image}
                    alt= {products.name} 
                />
            </div>

            <h1 className="product-title">{products.name}</h1>
            <p className="product-description">{products.description}</p>
            <p className="product-price">Price: {products.price} </p>
            <p className="product-rating">Rating: {products.rating} </p>
            <button className="product-button">Order Now</button>
        </div>
    )
}

export default Productcard