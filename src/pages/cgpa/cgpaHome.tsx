// src/components/cgpa/cgpa.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CGPAHome = () => {
    const [sgpas, setSgpas] = useState<(number | "")[]>(Array(8).fill(""));
    const [result, setResult] = useState<{ cgpa: number | null; percentage: number | null }>({
        cgpa: null,
        percentage: null,
    });

    const handleChange = (index: number, value: string) => {
        const newSgpas = [...sgpas];
        newSgpas[index] = value === "" ? "" : Math.min(Math.max(Number(value), 0), 10);
        setSgpas(newSgpas);
    };

    const calculateCGPA = () => {
        const validSgpas = sgpas.filter((sgpa) => sgpa !== "");
        const sum = validSgpas.reduce((acc, sgpa) => acc + Number(sgpa), 0);
        const cgpa = validSgpas.length > 0 ? sum / validSgpas.length : 0;
        const percentage = cgpa * 10;
        setResult({ cgpa: Number(cgpa.toFixed(2)), percentage: Number(percentage.toFixed(2)) });
    };

    const reset = () => {
        setSgpas(Array(8).fill(""));
        setResult({ cgpa: null, percentage: null });
    };

    return (
        <section className="w-full bg-stone-100 dark:bg-zinc-900 py-10 px-4 sm:px-6 lg:px-12 transition-all fade-in">
            <div className="max-w-[800px] mx-auto rounded-3xl shadow-xl bg-white dark:bg-zinc-800 p-10 pt-5 pb-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-red-900 dark:text-white text-center">
                    CGPA Calculator
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {sgpas.map((sgpa, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <label className="text-md font-semibold text-zinc-800 dark:text-gray-300">
                                Semester {i + 1}:
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                max="10"
                                value={sgpa}
                                onChange={(e) => handleChange(i, e.target.value)}
                                placeholder="Enter SGPA (0 - 10)"
                                className="w-full max-w-[200px] px-4 py-2 rounded-lg bg-white text-black
                                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900
                                dark:focus:ring-amber-500 transition-all duration-200 shadow-sm"
                            />

                        </div>
                    ))}
                </div>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-2">
                    <strong>Note:</strong> Fill only the semester completed. Leave fields blank for ongoing and upcoming semester.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-zinc-200 dark:bg-zinc-700 rounded-xl p-4 text-center">
                        🎓 <span className="font-semibold">CGPA Secured</span>
                        <div className="text-3xl mt-2 text-red-900 dark:text-amber-400">{result.cgpa ?? "--"}</div>
                    </div>
                    <div className="bg-zinc-200 dark:bg-zinc-700 rounded-xl p-4 text-center">
                        🎓 <span className="font-semibold">Percentage Secured</span>
                        <div className="text-3xl mt-2 text-red-900 dark:text-amber-400">
                            {result.percentage ?? ""}%
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                    <Button
                        onClick={calculateCGPA}
                        className="bg-red-900 text-white hover:bg-amber-500 hover:text-white px-10 py-5.5 rounded-full 
                        shadow-md transition-all hover:cursor-pointer text-lg hover:scale-102"
                    >
                        Calculate
                    </Button>
                    <Button
                        onClick={reset}
                        variant="outline"
                        className="border-2 border-red-800 dark:text-white text-red-900 hover:border-amber-500 
                        hover:text-amber-500 dark:hover:text-amber-500 px-13 py-5 rounded-full transition-all 
                        hover:cursor-pointer text-lg dark:hover:border-amber-500 hover:scale-102"
                    >
                        Reset 
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CGPAHome;
