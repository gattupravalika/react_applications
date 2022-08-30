import React from 'react'

function Dashboard() {
    let products = [
        {
            "id": 1,
            "name": "Rice",
            "Qty": 25,
            "price": 1000
        },
        {
            "id": 2,
            "name": "Oil",
            "Qty": 5,
            "price": 500
        },
        {
            "id": 3,
            "name": "Soaps",
            "Qty": 25,
            "price": 250
        }
    ]

    const productlist = products.map(product=>{
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.Qty}</td>
                <td>{product.price}</td>
                <td>
                    <button className='btn btn-primary me-1'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <div className='container'>
            <h3>Product List</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {productlist}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
