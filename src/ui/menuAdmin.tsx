import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Menu from "./menu";

const screen = {
    hidden: { opacity: 0, scale: 0.001 },
    visible: { opacity: 1, scale: 1 },
};

export default function MenuAdmin() {
    return (
        <main className="constainer-dashboard">
            <motion.div
                variants={screen}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-background w-full h-full flex flex-row overflow-hidden overflow-y-hidden"
            >
                <Menu />
                <section className="w-full h-full">
                    <Outlet />
                </section>
            </motion.div>
        </main>
    );
}
