import '../tailwind.css';
import React, {useState} from 'react';

export default function Dashboard() {
    const [sortBy, setSortBy] = useState('newArrivals');

    const products = [
        {
            id: 1, name: "Premium Wireless Headphones", price: 299.99,
            isFavorite: false
        },
        {
            id: 2, name: "Smart Watch with Fitness Tracker", price: 199.99,
            isFavorite: true
        },
        {
            id: 3, name: "High-Performance Speakers", price: 129.99,
            isFavorite: false
        },
        {
            id: 4, name: "Wireless Security Camera", price: 199.99,
            isFavorite: false
        },
        // Add more products as needed
    ];

    const filteredProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case 'newArrivals':
                return a.id - b.id;
            case 'bestSellers':
                return b.price - a.price;
            case 'priceLowToHigh':
                return a.price - b.price;
            default:
                return 0;
        }
    });

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <nav className="bg-white shadow-lg p-4">
                    <h1 className="text-2xl font-bold
text-blue-600">ShopName</h1>
                    <div className="flex justify-between items-center
max-w-6xl mx-auto">
                        <div className="space-x-4">
                            <a href="/dashboard" className="text-gray-600
hover:text-blue-600">Dashboard</a>
                            <a href="/gallery" className="text-gray-600
hover:text-blue-600">Gallery</a>
                            <a href="/cart" className="text-gray-600
hover:text-blue-600">Cart (3 items)</a>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto px-4 py-8">
                    {/* Sorting Dropdown */}
                    <div className="mb-8 flex justify-between items-center">
                        <h2 className="text-2xl font-bold mb-4">Featured
                            Products</h2>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border border-gray-200 px-4
py-2"
                        >
                            <option value="newArrivals">New Arrivals</option>
                            <option value="bestSellers">Best Sellers</option>
                            <option value="priceLowToHigh">Price: Low to
                                High
                            </option>
                        </select>
                    </div>

                    {/* Categories */}
                    <div className="mb-8 grid grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg
mb-2">Electronics</h3>
                            <p className="text-gray-600">12 items</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Home &
                                Kitchen</h3>
                            <p className="text-gray-600">8 items</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg
mb-2">Fashion</h3>
                            <p className="text-gray-600">10
                                items</p>
                        </div>
                    </div>

                    {/* Featured Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2
lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white
rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-start
justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold
text-lg">[{product.name}]</h3>
                                        <p className="text-gray-600">$
                                            {product.price}</p>
                                    </div>
                                    <button
                                        className="text-blue-500
hover:text-blue-600"
                                        onClick={() => console.log("Add to cart")}
                                    />
                                    // Add more features like favorite button,etc.
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity Section */}
                    <div className="rounded-lg shadow-sm p-4 mt-8 bg-white">
                        <h2 className="font-bold text-lg mb-4">Recent
                            Activity</h2>
                        <p className="text-gray-600">You have 3 new
                            notifications</p>
                        <p className="text-gray-600">Cart has 3 items</p>
                    </div>
                </main>
            </div>
        </>
    );
};

// export default Dashboard;
