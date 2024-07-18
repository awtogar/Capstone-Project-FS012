function CardTemplates(img, city, name, Description) {
return (
    <div className="bg-black shadow-lg rounded-lg overflow-hidden">
    <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover"/>
    <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{city.name}</h3>
        <p className="text-gray-600 mb-4">City Description</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">see details</button>
    </div>
</div>
);
}
export default CardTemplates;