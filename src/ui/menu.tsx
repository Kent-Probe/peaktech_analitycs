import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../hook/useDimensions";
import MenuToggle from "./menuToggle";
import { Navigation } from "./navigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

export default function Menu() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav className="absolute top-0 left-0 bottom-0 w-80 z-50">
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div
                    className="absolute top-0 left-0 bottom-0 w-80 bg-[#ffffff]"
                    variants={sidebar}
                />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
        </motion.nav>
    );
}
