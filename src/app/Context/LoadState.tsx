"use client"
import { createContext, useState, ReactNode } from 'react';

interface ProjectContextType {
    isProjectOpening: boolean;
    setIsProjectOpening: (value: boolean) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
    isProjectOpening: false,
    setIsProjectOpening: () => {},

});

interface ProjectContextProviderProps {
    children: ReactNode;
}

export const ProjectContextProvider = ({ children }: ProjectContextProviderProps) => {
    const [isProjectOpening, setIsProjectOpening] = useState(false);

    return (
        <ProjectContext.Provider value={{ isProjectOpening, setIsProjectOpening}}>
            {children}
        </ProjectContext.Provider>
    );
};