"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GiftData = {
  date: string;
  place: string;
  message: string;
};

type GiftContextType = {
  gift: GiftData;
  setDate: (date: string) => void;
  setPlace: (place: string) => void;
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [gift, setGift] = useState<GiftData>({
    date: "",
    place: "",
    message: "",
  });

  const setDate = (date: string) => {
    setGift((prev) => ({
      ...prev,
      date,
      message: `Hola bebé 💖 Quiero ir a ${prev.place || "___"} el ${date}`,
    }));
  };

  const setPlace = (place: string) => {
    setGift((prev) => ({
      ...prev,
      place,
      message: `Hola bebé 💖 Quiero ir a ${place} el ${prev.date || "___"}`,
    }));
  };

  return (
    <GiftContext.Provider value={{ gift, setDate, setPlace }}>
      {children}
    </GiftContext.Provider>
  );
}

export function useGift() {
  const context = useContext(GiftContext);
  if (!context) {
    throw new Error("useGift must be used inside GiftProvider");
  }
  return context;
}
