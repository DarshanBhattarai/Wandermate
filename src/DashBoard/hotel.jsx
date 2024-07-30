import React, { useState, useEffect } from "react";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newHotel, setNewHotel] = useState({
    name: "",
    price: "",
    img: "",
    ratings: "",
    freeCancellation: "",
    reserveNow: "",
    desc: "",
  });

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  // Load hotels from local storage
  const loadHotelsFromLocalStorage = () => {
    const storedHotels = localStorage.getItem("hotels");
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
  };

  useEffect(() => {
    loadHotelsFromLocalStorage();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({ ...newHotel, [name]: value });
  };

  // Handle form submission for local storage
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit hotel
      const updatedHotels = hotels.map((hotel, index) =>
        index === editIndex ? newHotel : hotel
      );
      setHotels(updatedHotels);
      localStorage.setItem("hotels", JSON.stringify(updatedHotels));
      setEditIndex(null);
    } else {
      // Add new hotel
      const updatedHotels = [...hotels, newHotel];
      setHotels(updatedHotels);
      localStorage.setItem("hotels", JSON.stringify(updatedHotels));
    }
    setNewHotel({
      name: "",
      price: "",
      img: "",
      ratings: "",
      freeCancellation: "",
      reserveNow: "",
      desc: "",
    });
    setShowForm(false);
  };

  // Handle form submission for API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit hotel
      try {
        const response = await fetch(`http://localhost:3000/hotels/${editIndex}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newHotel),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const updatedHotels = hotels.map((hotel, index) =>
          index === editIndex ? data : hotel
        );
        setHotels(updatedHotels);
        setEditIndex(null);
      } catch (error) {
        console.error("Error updating hotel:", error);
      }
    } else {
      // Add new hotel
      try {
        const response = await fetch("http://localhost:3000/hotels", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newHotel),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHotels([...hotels, data]);
      } catch (error) {
        console.error("Error creating hotel:", error);
      }
    }
    setNewHotel({
      name: "",
      price: "",
      img: "",
      ratings: "",
      freeCancellation: "",
      reserveNow: "",
      desc: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewHotel(hotels[index]);
    setShowForm(true);
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`http://localhost:3000/hotels/${index}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setHotels(hotels.filter((hotel, i) => i !== index));
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showForm ? "Cancel" : "Add New Hotel"}
      </button>
      {showForm && (
        <form onSubmit={handleFormSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Hotel Name"
            value={newHotel.name}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newHotel.price}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newHotel.img}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="ratings"
            placeholder="Ratings"
            value={newHotel.ratings}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="freeCancellation"
            placeholder="Free Cancellation"
            value={newHotel.freeCancellation}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="reserveNow"
            placeholder="Reserve Now"
            value={newHotel.reserveNow}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={newHotel.desc}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded mb-2"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {editIndex !== null ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>
      )}

      <table className="min-w-full bg-white mt-4 border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Ratings</th>
            <th className="py-2 px-4 border">Free Cancellation</th>
            <th className="py-2 px-4 border">Reserve Now</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index} className="border">
              <td className="py-2 px-4 border">
                <img src={hotel.img} alt={hotel.name} className="w-20 h-20 object-cover" />
              </td>
              <td className="py-2 px-4 border">{hotel.name}</td>
              <td className="py-2 px-4 border">{hotel.price}</td>
              <td className="py-2 px-4 border">{hotel.ratings}</td>
              <td className="py-2 px-4 border">{hotel.freeCancellation}</td>
              <td className="py-2 px-4 border">{hotel.reserveNow}</td>
              <td className="py-2 px-4 border">{hotel.desc}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(index)}
                  className="mr-2 py-1 bg-blue-900 px-6 text-white mb-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="mr-2 py-1 bg-red-900 px-6 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hotel;
