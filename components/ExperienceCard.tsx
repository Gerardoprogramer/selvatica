import { motion } from "motion/react"
import Image from "next/image"

export const ExperienceCard = ({ className = "", number, title, desc, img, ratio, }: {
    className?: string; number: string; title: string; desc: string; img: string; ratio: string;
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className={`group flex flex-col gap-6 ${className}`}
        >
            <div className={`overflow-hidden rounded-2xl ${ratio} relative`}>
                <Image
                    src={img}
                    alt={title}
                    height={1080}
                    width={1920}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1400 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute top-5 left-5 text-mist font-serif italic text-xl mix-blend-difference">
                    / {number}
                </span>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-serif text-3xl md:text-4xl text-volcanic">{title}</h3>
                <p className="text-volcanic/65 max-w-[44ch] text-pretty leading-relaxed">{desc}</p>
            </div>
        </motion.article>
    )
}
