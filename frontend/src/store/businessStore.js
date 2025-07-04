import { create } from "zustand";

export const useBusinessStore = create((set) => ({
  name: "Cake & Co",
  location: "Mumbai",
  isFetchingData: false,
  rating: 4.5,
  reviews: 29,
  headline: "Why Cake & Co is Mumbai’s Sweetest Spot in 2025",
  setBusinessData: (data) => set(data),
  setIsFetchingData: (value) => set({ isFetchingData: value }),
}));
