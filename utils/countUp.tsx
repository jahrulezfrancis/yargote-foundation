import { useEffect, useState } from "react";


export default function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number | undefined
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [end, duration])

    return <span>{count}+</span>
}