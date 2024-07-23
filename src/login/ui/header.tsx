export default function Header() {
    return (
        <div className="w-fit m-[0_auto] text-center">
            <div className="w-fit m-[0_auto]">
                <img width={180} src="./icon.svg" alt="Google" />
            </div>
            <h1 className="text-8xl font-Berlin text-primary">
                PEAKTECH
                <br />
                <span className="text-secondary">ANALITYCS</span>
            </h1>
            <div className="bg-secondary h-2 w-full rounded-xl"></div>
            <p className="font-Berlin text-xl w-full tracking-widest text-primary">
                OFERTAS INTELIGENTES, RESULTADOS REALES
            </p>
        </div>
    );
}
