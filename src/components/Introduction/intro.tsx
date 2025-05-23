import React from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight } from "lucide-react";
import img from "../../assets/animebg.gif";

const IntroInfoCard: React.FC = () => {
    return (
        <section className="w-full bg-stone-100 dark:bg-zinc-900 py-40 px-4 sm:px-6 lg:px-12 transition-all fade-in">
            <div className="max-w-[1330px] mx-auto rounded-3xl shadow-xl bg-white dark:bg-zinc-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Column */}
                    <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-red-900 dark:text-white">
                            ASTU CGPA & SGPA Calculator
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            This tool is designed for Assam Science and Technology University (ASTU) students to easily compute their <strong>SGPA</strong> (Semester Grade Point Average)
                            and <strong>CGPA</strong> (Cumulative Grade Point Average) based on credit-weighted grading formulas.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Simply input your semester grades or credit-weighted SGPA values, and the calculator will accurately compute your academic progress instantly. It's fast, lightweight, and
                            tailored to ASTU's official calculation methods.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                to="/cgpa"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-900 
                  text-white font-semibold hover:bg-amber-500 hover:text-white 
                  transition-all duration-300 shadow-md hover:scale-105 text-sm"
                            >
                                Calculate CGPA
                                <Calculator size={18} />
                            </Link>

                            <Link
                                to="/sgpa"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-700 
                  text-white font-semibold hover:bg-amber-500 hover:text-white 
                  transition-all duration-300 shadow-md hover:scale-105 text-sm"
                            >
                                Calculate SGPA
                                <Calculator size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div
                        className="hidden md:block bg-cover bg-center min-h-[300px]"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroInfoCard;
