
export const BookingField = ({ label, type, defaultValue, }: { label: string; type: "date" | "select"; defaultValue?: string; }) => {
    return (
        <label className="flex-1 px-4 py-3 flex flex-col gap-1 cursor-pointer hover:bg-stone/60 rounded-xl transition-colors">
            <span className="text-[10px] uppercase tracking-[0.18em] text-volcanic/50 font-semibold">
                {label}
            </span>
            {type === "date" ? (
                <input
                    type="date"
                    defaultValue={defaultValue}
                    className="text-sm font-medium bg-transparent focus:outline-none"
                />
            ) : (
                <select className="text-sm font-medium bg-transparent focus:outline-none cursor-pointer">
                    <option>2 Adultos</option>
                    <option>2 Adultos · 1 Niño</option>
                    <option>2 Adultos · 2 Niños</option>
                    <option>4 Adultos</option>
                </select>
            )}
        </label>
    )
}
