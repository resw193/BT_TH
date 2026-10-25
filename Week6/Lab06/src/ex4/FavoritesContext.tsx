import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type Ctx = { ids: string[]; toggle: (id: string) => void; has: (id: string) => boolean };
const FavoritesContext = createContext<Ctx | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const toggle = useCallback((id: string) => {
    setIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }, []);
  const value = useMemo<Ctx>(
    () => ({ ids, toggle, has: (id: string) => ids.includes(id) }), [ids, toggle],
  );
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites(): Ctx {
  const value = useContext(FavoritesContext);
  if (!value) throw new Error("useFavorites phải được dùng trong FavoritesProvider.");
  return value;
}
