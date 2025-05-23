import React from "react";
import { useVisitorCounter } from "@/lib/contexts/VisitorCounterContext";

const VisitorCounter: React.FC = () => {
    const { visitorCount } = useVisitorCounter();

    return (
        <div className="p-4 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 border-4 
        border-zinc-700 text-center shadow-lg">
            <h2 className="text-amber-400 text-lg mb-2 font-semibold">Total Visitors</h2>
            <div className="flex justify-center space-x-1 bg-zinc-950 rounded-md px-3 py-2 shadow-inner">
                {visitorCount !== null ? (
                    visitorCount.toString().split("").map((digit, idx) => (
                        <span
                            key={idx}
                            className="text-3xl font-mono text-amber-300 bg-black px-2 py-1 rounded border 
                            border-zinc-600 shadow-inner"
                        >
                            {digit}
                        </span>
                    ))
                ) : (
                    <span className="text-white text-xl">Loading...</span>
                )}
            </div>
        </div>
    );
};

export default VisitorCounter;
