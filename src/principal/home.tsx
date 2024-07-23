import { Navigate } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <Navigate to={"/login"} />
        </main>
    );
}
