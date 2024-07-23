import {
    faChevronCircleRight,
    faLock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useCycle } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import icon from "../../public/favicon_baner_dark.svg";

type FormData = {
    username: string;
    password: string;
};

const bgCircle = {
    end: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    start: {
        clipPath: "circle(10px at 295px 25px)",
        display: "none",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const text = {
    end: {
        color: "#fff",
    },
    start: {
        color: "#000",
    },
};

export default function LoginForm() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();
    const onSubmit = (e: FormData) => {
        console.log(e);
        const real = true;
        if (real) navigate("/dashboard");
    };

    return (
        <div className="relative h-[600px] w-96 shadow-[0px_0px_24px_#2c2c2c] !font-Releway border-[0] rounded-xl overflow-hidden">
            <div className="z-[1] relative h-full ">
                <h1 className="text-secondary text-4xl font-bold text-center mt-10">
                    Iniciar Sesión
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-96 p-7 pt-7"
                >
                    <div className="relative py-5 px-0">
                        <FontAwesomeIcon
                            className="absolute top-[calc(50%-10px)] left-2 text-secondary"
                            icon={faUser}
                        />
                        <motion.input
                            whileHover={{
                                borderBottomColor: "#ea5600",
                            }}
                            whileFocus={{
                                borderBottomColor: "#ea5600",
                                outlineColor: "#ea5600",
                                outlineStyle: "double",
                                outlineOffset: "0",
                            }}
                            type="text"
                            className="outline-none border-b-2 border-secondary border-solid bg-none p-[10px] pl-7 font-bold w-full"
                            placeholder="Usuario"
                            {...register("username")}
                        />
                    </div>
                    <div className="relative py-5 px-0 pt-2">
                        <FontAwesomeIcon
                            className="absolute top-[calc(50%-15px)] left-2 text-secondary"
                            icon={faLock}
                        />
                        <motion.input
                            whileHover={{
                                borderBottomColor: "#ea5600",
                            }}
                            whileFocus={{
                                borderBottomColor: "#ea5600",
                                outlineColor: "#ea5600",
                                outlineStyle: "double",
                                outlineOffset: "0",
                            }}
                            type="password"
                            className="outline-none border-b-2 border-secondary border-solid bg-none p-[10px] pl-7 font-bold w-full"
                            placeholder="Contraseña"
                            {...register("password")}
                        />
                    </div>
                    <motion.button
                        onHoverStart={() => toggleOpen()}
                        onHoverEnd={() => toggleOpen()}
                        className="relative button bg-white text-sm mt-[30px] p-[14px_20px] rounded-xl border border-solid border-[#D4D3E8] font-bold flex items-center w-full text-secondary shadow-[0px_2px_2px] shadow-secondary cursor-pointer duration-200"
                    >
                        <motion.div
                            variants={bgCircle}
                            animate={isOpen ? "start" : "end"}
                            className="bg-secondary absolute top-0 left-0 right-0 bottom-0 z-0 rounded-xl"
                        ></motion.div>
                        <motion.span
                            variants={text}
                            className="text-base text-white z-10"
                            animate={isOpen ? "start" : "end"}
                        >
                            Ingresar
                        </motion.span>
                        <FontAwesomeIcon
                            className={`text-[24px] ml-auto z-10 ${isOpen ? "text-secondary" : "text-white"} duration-500`}
                            icon={faChevronCircleRight}
                        />
                    </motion.button>
                </form>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 [clip-path:_inset(0_0_0_0)] ">
                <img
                    className="absolute bg-red -bottom-0.5 right-0 z-10"
                    width={170}
                    src={icon}
                    alt="logo"
                />
                <span className="rotate-45 absolute h-[540px] w-[200px] bg-secondary top-[270px] right-[-20px] rounded-[60px]"></span>
                <span className="rotate-45 absolute h-[640px] w-[190px] bg-gradient-to-l from-[#171717] to-[#2c2c2c] top-[40px] right-[100px] rounded-[32px]"></span>
                <span className="rotate-45 absolute h-[220px] w-[220px] bg-secondary top-[220px] left-[-200px] rounded-[32px]"></span>
                <span className="rotate-[135deg] absolute h-[700px] w-[690px] bg-background top-[-400px] right-[calc(50%-350px)] rounded-[0_72px_0_0]"></span>
            </div>
        </div>
    );
}
// bg-gradient-to-b from-[#787CFE] via-[#9154ED] to-[#A638E7]
