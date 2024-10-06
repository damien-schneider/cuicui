import { useState, useEffect } from "react";

export const useFirstVisit = (): boolean => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem("firstVisit");

    if (firstVisit === null) {
      localStorage.setItem("firstVisit", "false");
      setIsFirstVisit(true);
    }
  }, []);

  return isFirstVisit;
};
