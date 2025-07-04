import { useBusinessStore } from '../store/businessStore';
import { regenerateHeadline } from '../api/api';
const BusinessCard = () => {
  const { name, location, rating, reviews, headline, setBusinessData } = useBusinessStore();
  const handleRegenerate = async () => {
    const data = await regenerateHeadline(name, location);
    setBusinessData({ name, location, rating, reviews, headline: data.headline });
  };
  return (
    <section className="pt-8 pb-16 px-4">
      <div className="max-w-lg mx-auto bg-white border border-green-100 shadow-lg rounded-xl p-6 space-y-5">
        <h3 className="text-lg font-bold text-gray-700 text-center">
          📊 Business Insights
        </h3>

        <div className="flex justify-between text-gray-600">
          <span>Business Name</span>
          <span className="text-yellow-500 font-semibold">{name}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Google Rating</span>
          <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Number of Reviews</span>
          <span className="font-semibold">{reviews}</span>
        </div>

        <div className="text-sm text-gray-700">
          <p className="font-medium mb-1">SEO Headline:</p>
          <p className="italic text-green-600">
            {headline}
          </p>
        </div>

        <button onClick={handleRegenerate} className="w-full mt-4 bg-green-100 text-green-700 font-medium py-2 rounded hover:bg-green-200 transition">
          🔁 Regenerate SEO Headline
        </button>
      </div>
    </section>
  );
};

export default BusinessCard;
