import { useBusinessStore } from "../store/businessStore";

const BASE_URL = "https://growthproaiassignment-tdou.onrender.com";

export const fetchBusinessData = async (name, location) => {
  const setIsFetchingData = useBusinessStore.getState().setIsFetchingData;

  try {
    setIsFetchingData(true);
    const res = await fetch(`${BASE_URL}/business-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Fetch failed", error);
    return { rating: null, reviews: null, headline: "Failed to fetch data." };
  } finally {
    setIsFetchingData(false);
  }
};

export const regenerateHeadline = async (name, location) => {
  try {
    const res = await fetch(
      `${BASE_URL}/regenerate-headline?name=${name}&location=${location}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Regeneration failed", error);
    return { headline: "Unable to regenerate headline." };
  } finally {
  }
};
