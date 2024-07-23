import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemIds = [0, 1, 2, 3, 4];

export const Navigation = () => {
    <motion.ul className="m-0 p-6 absolute top-28 w-56" variants={variants}>
        {itemIds.map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>;
};
