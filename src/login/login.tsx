import { motion } from "framer-motion";
import Header from "../ui/header";
import LoginForm from "./loginForm";

const screen = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const leftScren = {
    hidden: { opacity: 0, x: -700 },
    visible: { opacity: 1, x: 0 },
};

const rightScreen = {
    hidden: { opacity: 0, x: 700 },
    visible: { opacity: 1, x: 0 },
};

export default function Login() {
    return (
        <main className="h-screen w-full flex flex-row overflow-hidden overflow-y-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={screen}
                className="h-screen w-full flex flex-row overflow-hidden overflow-y-hidden"
            >
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={leftScren}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="lg:flex hidden bg-background p-10 w-full h-full flex-col justify-center items-center"
                >
                    <Header />
                </motion.header>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={rightScreen}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full grid place-content-center bg-gradient-to-r from-[#d8895b] to-primary"
                >
                    <LoginForm />
                </motion.section>
            </motion.div>
        </main>
    );
}
