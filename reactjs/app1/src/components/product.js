export default function Product(props) {
    let {name,price,weight,description,quantity} = props;
    return (
    <div>
        <h3>{name}</h3>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
    </div>);
}