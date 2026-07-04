
export const Stat = ({ n, l }: { n: string; l: string }) => {
    return (
        <div className="flex flex-col gap-1 border-l border-mist/15 pl-4">
            <span className="font-serif text-3xl text-mist">{n}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-mist/50">{l}</span>
        </div>
    )
}
