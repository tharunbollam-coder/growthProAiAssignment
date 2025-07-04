import BusinessCard from "./components/BusinessCard";
import Form from "./components/Form";
import Hero from "./components/Hero";
import SkeletonCard from "./components/SkeletonCard";
import { useBusinessStore } from "./store/businessStore";

function App() {
  const { isFetchingData } = useBusinessStore();
  return (
    <div className="bg-white text-gray-800 font-sans bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <main className="px-4 max-w-4xl mx-auto">
        <Form />
        <div className="min-h-[500px] transition-all duration-300">
          {isFetchingData ? <SkeletonCard /> : <BusinessCard />}
        </div>
      </main>
    </div>
  );
}

export default App;
