import React from 'react'
import { Link } from 'react-router-dom';

const ShopItemCard = ({ item }) => {
    return (
        <div className="shop-item" style={{ marginBottom: "20px", padding: "10px", borderRadius: "8px", border: "1px solid #ddd", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Link to={`/item/${item._id}`} style={{ display: "block", textDecoration: "none" }}>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
            </Link>

            <div style={{ padding: "10px" }}>
                <Link to={`/item/${item._id}`} style={{ textDecoration: "none" }}>
                    <h2 style={{ color: "#daa520", fontSize: "22px", margin: "10px 0" }}><strong>{item.name}</strong></h2>
                </Link>
                <p style={{ fontSize: "18px", margin: "5px 0", color: "#555" }}>Rs. {item.price}</p>
            </div>
        </div>
    );
};

export default ShopItemCard