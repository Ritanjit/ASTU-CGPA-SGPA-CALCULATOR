import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
// import api from "./api"; // Your axios instance

interface VisitorContextType {
    visitorCount: number | null;
}

const VisitorCounterContext = createContext<VisitorContextType>({ visitorCount: null });

export const useVisitorCounter = () => useContext(VisitorCounterContext);

export const VisitorCounterProvider = ({ children }: { children: ReactNode }) => {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const incrementFlag = sessionStorage.getItem("hasIncremented");

        const fetchOrIncrement = async () => {
            try {
                // const res = incrementFlag
                //     ? await api.get("/visitors")
                //     : await api.post("/visitors");

                // setVisitorCount(res.data.totalVisitors);
                if (!incrementFlag) sessionStorage.setItem("hasIncremented", "true");
            } catch (err) {
                console.error("Visitor counter error:", err);
            }
        };

        fetchOrIncrement();
    }, []);

    return (
        <VisitorCounterContext.Provider value={{ visitorCount }}>
            {children}
        </VisitorCounterContext.Provider>
    );
};
