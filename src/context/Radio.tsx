import { createContext, useContext, ReactNode } from "react";

type RadioContextType = {
    value: string;
    onChange: (value: string) => void;
}

const RadioContext = createContext<RadioContextType | null>(null);

type RadioProps = {
    value: string;
    children: ReactNode;
}

export default function Radio({ children, ...props }: RadioProps) {
    const context = useContext(RadioContext);
    if (!context) {
        throw new Error();
    }

    const { value, onChange } = context;

    return (
        <label className={`px-6 py-4 shadow rounded-lg cursor-pointer transition-all ${value === props.value ?
         "bg-gradient-to-t from-blue-100 to-violet-100 text-violet-500 shadow-violet-300 scale-105" : "bg-white hover:shadow-md shadow-gray-300"}`}>
            <input type="radio" className="hidden" checked={value === props.value} onChange={() => onChange(props.value)} {...props} />
            {children}
        </label>
    );
}

type RadioGroupProps = {
    value: string;
    onChange: (value: string) => void;
    children: ReactNode;
}

export function RadioGroup({ value, onChange, children }: RadioGroupProps) {
    return (
        <RadioContext.Provider value={{ value, onChange }}>
            {children}
        </RadioContext.Provider>
    );
}