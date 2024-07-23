import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Statistics from "./ui/statistics";

export default function Dashboard() {
    return (
        <div className="w-full p-10">
            <header className="bg-white min-h-20 w-full rounded-lg flex justify-center items-center gap-5 text-3xl font-Releway font-bold text-secondary mb-5">
                <h1>Bodytech Colombia.</h1>
                <FontAwesomeIcon
                    className="text-blue-500"
                    icon={faInfoCircle}
                />
            </header>
            <Statistics />
        </div>
    );
}
