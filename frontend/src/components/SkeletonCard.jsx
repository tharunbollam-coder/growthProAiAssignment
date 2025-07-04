const SkeletonCard = () => {
  return (
    <section className="pt-8 pb-16 px-4">
      <div className="max-w-lg mx-auto bg-white border border-green-100 shadow-lg rounded-xl p-6 space-y-5 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto" /> {/* Title */}
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-12" />
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-10" />
        </div>
        <div>
          <div className="h-3 bg-gray-200 rounded w-24 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
        <div className="h-10 bg-gray-200 rounded w-full mt-4" />
      </div>
    </section>
  );
};

export default SkeletonCard;
