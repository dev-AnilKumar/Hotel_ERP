import React from 'react'
import { Link } from 'react-router-dom';

const ShopItemCard = ({ item }) => {
    return (
        <Link to={`/shop/${item._id}`} style={{ display: "block", textDecoration: "none" }}>

            <div className="shop-item bg-white" style={{ marginBottom: "20px", padding: "10px", borderRadius: "8px", border: "1px solid #ddd", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />

                <div style={{ padding: "10px" }}>
                    <h2 style={{ color: "#daa520", fontSize: "22px", margin: "10px 0" }}><strong>{item.itemName}</strong></h2>
                    <p style={{ fontSize: "18px", margin: "5px 0", color: "#555" }}>Rs. {item.itemPrice}</p>
                </div>
            </div>
        </Link>
    );
};

export default ShopItemCard