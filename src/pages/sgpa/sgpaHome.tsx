import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Subject {
    grade: string;
    credit: number;
}

const gradePoints: { [key: string]: number } = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    P: 4,
    F: 0,
    Ab: 0,
    R: 0,
    I: 0,
    X: 0,
    WH: 0,
    W: 0,
    PP: 0,
    NP: 0,
};

const SGPAHome = () => {
    const [subjects, setSubjects] = useState<Subject[]>([
        { grade: "", credit: 0 },
        { grade: "", credit: 0 },
        { grade: "", credit: 0 },
        { grade: "", credit: 0 },
    ]);
    const [sgpa, setSgpa] = useState<number | null>(null);

    const handleSubjectChange = (index: number, field: "grade" | "credit", value: string) => {
        const updated = [...subjects];
        if (field === "grade") {
            updated[index].grade = value.toUpperCase();
        } else {
            updated[index].credit = Number(value);
        }
        setSubjects(updated);
    };

    const addSubject = () => {
        if (subjects.length < 15) {
            setSubjects([...subjects, { grade: "", credit: 0 }]);
        }
    };

    const calculateSGPA = () => {
        let totalCredits = 0;
        let weightedSum = 0;
        subjects.forEach((subj) => {
            const gp = gradePoints[subj.grade];
            if (gp !== undefined && subj.credit > 0) {
                totalCredits += subj.credit;
                weightedSum += gp * subj.credit;
            }
        });
        const result = totalCredits ? weightedSum / totalCredits : 0;
        setSgpa(Number(result.toFixed(2)));
    };

    const reset = () => {
        setSubjects([
            { grade: "", credit: 0 },
            { grade: "", credit: 0 },
            { grade: "", credit: 0 },
            { grade: "", credit: 0 },
        ]);
        setSgpa(null);
    };

    return (
        <section className="w-full bg-stone-100 dark:bg-zinc-900 py-10 px-4 sm:px-6 lg:px-12 transition-all fade-in">
            <div className="max-w-[850px] mx-auto rounded-3xl shadow-xl bg-white dark:bg-zinc-800 p-10 pt-5 pb-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-red-900 dark:text-white text-center">
                    SGPA Calculator
                </h1>

                {subjects.map((subj, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-3">
                        <div className="flex justify-between items-center">
                            <label className="font-medium text-zinc-800 dark:text-gray-300">Subject {i + 1} Grade:</label>
                            <input
                                type="text"
                                maxLength={2}
                                value={subj.grade}
                                onChange={(e) => handleSubjectChange(i, "grade", e.target.value)}
                                placeholder="A+, B+, O"
                                className="w-full max-w-[200px] px-4 py-2 rounded-lg bg-white text-black border 
                                border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900 
                                dark:focus:ring-amber-500 transition-all duration-200 shadow-sm ml-4"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-medium text-zinc-800 dark:text-gray-300">Subject {i + 1} Credit:</label>
                            <input
                                type="number"
                                min={0}
                                value={subj.credit}
                                onChange={(e) => handleSubjectChange(i, "credit", e.target.value)}
                                placeholder="e.g. 3"
                                className="w-full max-w-[200px] px-4 py-2 rounded-lg bg-white text-black border 
                                border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900 
                                dark:focus:ring-amber-500 transition-all duration-200 shadow-sm ml-4"
                            />
                        </div>
                    </div>
                ))}

                <div className="flex justify-end">
                    <Button
                        onClick={addSubject}
                        disabled={subjects.length >= 15}
                        className="mt-1 text-sm px-5 py-2 bg-zinc-700 text-white rounded-full 
                        hover:bg-amber-500 transition-all hover:cursor-pointer"
                    >
                        + Add Subject
                    </Button>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                    <Button
                        onClick={calculateSGPA}
                        className="bg-red-900 text-white hover:bg-amber-500 hover:text-white px-10 py-5.5 
                        rounded-full shadow-md transition-all hover:cursor-pointer text-lg hover:scale-102" 
                    >
                        Calculate
                    </Button>
                    <Button
                        onClick={reset}
                        variant="outline"
                        className="border-2 border-red-800 dark:text-white text-red-900 hover:border-amber-500 
                        hover:text-amber-500 px-13 py-5 rounded-full transition-all hover:cursor-pointer text-lg
                        dark:hover:border-amber-500 hover:scale-102"
                    >
                        Reset
                    </Button>
                </div>

                {sgpa !== null && (
                    <div className="text-center pt-4">
                        <h2 className="text-2xl text-red-900 dark:text-amber-400 font-bold">SGPA: {sgpa}</h2>
                    </div>
                )}

                {/* Grade Table */}
                <div className="mt-12 overflow-x-auto mb-3 rounded-t-lg">
                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 border 
                    border-gray-300 dark:border-gray-700">
                        <thead className="bg-gray-200 dark:bg-zinc-700">
                            <tr>
                                <th className="p-2 border border-gray-300 dark:border-gray-600">Marks%</th>
                                <th className="p-2 border border-gray-300 dark:border-gray-600">Grade</th>
                                <th className="p-2 border border-gray-300 dark:border-gray-600">Grade Point</th>
                                <th className="p-2 border border-gray-300 dark:border-gray-600">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["90 & Above", "O", 10, "Outstanding"],
                                ["80-89", "A+", 9, "Excellent"],
                                ["70-79", "A", 8, "Very Good"],
                                ["60-69", "B+", 7, "Good"],
                                ["50-59", "B", 6, "Above Average"],
                                ["45-49", "C", 5, "Average"],
                                ["35-44", "P", 4, "Pass"],
                                [" ", "Ab / R / X / WH / W / NP", 0, "Absent / Repeat / Expelled / Witheld / Withdrawn / Not Pass"],
                                [" ", "I / PP", '-', "Incomplete / Pass"],
                            ].map(([marks, grade, point, desc], i) => (
                                <tr key={i} className="border-t border-gray-300 dark:border-gray-700">
                                    <td className="p-2">{marks}</td>
                                    <td className="p-2 font-semibold">{grade}</td>
                                    <td className="p-2">{point}</td>
                                    <td className="p-2">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SGPAHome;
