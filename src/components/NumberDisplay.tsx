interface NumberDisplayProps {
    timeValue: number;
}

export function NumberDisplay(prop: NumberDisplayProps) {
    return (
        <span className="bg-slate-700 text-slate-300 text-4xl px-2">
            {prop.timeValue}
        </span>
    )
}