export function Products(props) {
    return( <div className="productList">
        <div key={props.id} className="productCard">
        <img src={props.image} alt="product-image" className="productImage" />
        <div className="productInfo">
            <div className="productName">
            <span >{props.name}</span>
            </div>
            <div className="displayStack_1">
                <div className="row1">
                <div className="productLocation"><img src="assets/location2.png" alt="location" />{props.location}</div>
                <div className="productPrice"><span>Mức giá:</span>{props.price}</div> </div>
                <div className="row2">
                <div className="productSuperficiality"><img src="assets/house-icon.png" alt="superficiality" />{props.superficiality}</div>
                <div className="productBedroom"><img src="assets/bed-icon.png" alt="bedroom" />{props.bedroom}</div>
                <div className="productBathroom"><img src="assets/bathtub-icon.png" alt="bathroom" />{props.bathroom}</div>
                </div>
                </div>
            </div>
            <div className="InfoButton">
            <button className="button">Xem chi tiết</button>
            </div>
            </div>
    </div>)
}