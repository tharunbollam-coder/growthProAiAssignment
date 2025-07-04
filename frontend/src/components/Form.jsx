import { useState } from "react";
import { fetchBusinessData, } from "../api/api";
import { useBusinessStore } from "../store/businessStore";

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const setBusinessData = useBusinessStore((state) => state.setBusinessData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchBusinessData(name, location);
      setBusinessData({ name, location, ...data });
      setName("");
      setLocation("");
    } catch (error) {
      console.error("Error fetching business data:", error);
      alert("Failed to fetch business data. Please try again.");
    }
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md border border-gray-100 rounded-xl p-8 space-y-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Business Information
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              Business Name
            </label>
            <input
              type="text"
              placeholder="e.g. Cake & Co"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="e.g. Mumbai"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
            >
              🔍 Get Business Data
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
