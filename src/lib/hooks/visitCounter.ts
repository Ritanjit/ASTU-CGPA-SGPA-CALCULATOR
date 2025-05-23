import { useEffect, useState } from "react";

const useVisitCounter = () => {
    const [count, setCount] = useState<number | null>(null);
    const NAMESPACE = "artifex-museum"; // ✅ Customize this
    const KEY = "visits";

    useEffect(() => {
        const storageKey = "hasCountedVisit";

        if (!localStorage.getItem(storageKey)) {
            // Hit the API only once per visit
            fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    setCount(data.value);
                    localStorage.setItem(storageKey, "true");
                })
                .catch((err) => {
                    console.error("Failed to update visit count", err);
                });
        } else {
            // Just get the current value without incrementing
            fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
                .then((res) => res.json())
                .then((data) => setCount(data.value))
                .catch((err) => {
                    console.error("Failed to get visit count", err);
                });
        }
    }, []);

    return count;
};

export default useVisitCounter;
