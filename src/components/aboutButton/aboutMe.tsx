// src/components/ui/AboutMeButton.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

const AboutMeButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center px-5 py-2 rounded-full bg-red-900 
                text-white hover:bg-amber-500 hover:text-white 
                transition-all duration-300 shadow-md hover:scale-105 text-sm hover:cursor-pointer"
        >
            Ritanjit Das
        </button>
    );
};

export default AboutMeButton;
