import { create } from "zustand";

// Define the store interface
interface LanguageStore {
  language: string; // The current language
  setLanguage: (language: string) => void; // Function to change the language
}

// Create the Zustand store
export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en", // Set the default language to "en"
  setLanguage: (language: string) => set({ language }), // Action to update the language
}));
