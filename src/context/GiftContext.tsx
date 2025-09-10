"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type GiftData = {
  date: string;
  place: string;
  message: string;
  note: string;
};

type GiftContextType = {
  gift: GiftData;
  setDate: (date: string) => void;
  setPlace: (place: string) => void;
  setNote: (note: string) => void;
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [gift, setGift] = useState<GiftData>({
    date: "",
    place: "",
    note: "",
    message: "",
  });

  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

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

  const setNote = (note: string) => {
    setGift((prev) => ({
      ...prev,
      note,
      message: `Hola bebé 💖 Quiero ir a ${prev.place || "___"} el ${
        prev.date || "___"
      }. ${note}`,
    }));
  };

  return (
    <GiftContext.Provider value={{ gift, setDate, setPlace, setNote }}>
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
