import { motion } from "framer-motion";
import { CSSProperties } from "react";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
    const style: CSSProperties = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            className="list-none m-0 mb-5 flex items-center cursor-pointer"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div
                className="w-10 h-10 rounded-[50%] flex-[40px_0] mr-5"
                style={style}
            />
            <div className="rounded-md w-48 h-5 flex-[1]" style={style} />
        </motion.li>
    );
};
