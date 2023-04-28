import './css/ProductGallery.css';

function ProductGallery(props){
    console.log('products', props);
    let products = [];
    props.products?.forEach(item => {
        products.push(
            <li className="list-group-item border-0 product-li px-0 mx-1">
                <div className="text-center product-label">
                    <p className="fw-bold mb-0">{item.manufacturer}</p>
                    <p className="fw-bold">{item.model}</p>
                </div>
                <div className="img-container d-flex flex-column">
                    <img className="my-auto" src={item.image}></img>
                </div>
                <div className="text-center product-name">
                    <p className="fw-bold">{item.name}</p>
                </div>
                <ul className="features">
                    <p>{item.description}</p> 
                </ul>
            </li>
        )
    })
    return(
        <div className="row justify-content-center mt-5" {...props.preview}>
            <div className="col-auto">
                <ul className="list-group list-group-horizontal">
                    {products}
                </ul>
            </div>
        </div>
    )
}

export default ProductGallery;