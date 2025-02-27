import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function Graph(props) {
    const {
        data,
        colors: {
            backgroundColor = "white",
            lineColor = "#2962FF",
            textColor = "black",
            areaTopColor = "#2962FF",
            areaBottomColor = "rgba(41, 98, 255, 0.28)",
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addAreaSeries({
            lineColor,
            topColor: areaTopColor,
            bottomColor: areaBottomColor,
        });
        newSeries.setData(data);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            chart.remove();
        };
    }, [
        data,
        backgroundColor,
        lineColor,
        textColor,
        areaTopColor,
        areaBottomColor,
    ]);

    return <div ref={chartContainerRef} />;
    // return (
    //     <article className="bg-white p-6 rounded-md">
    //         <h2>Usuarios</h2>
    //         <p>Usuarios registrados en la plataforma</p>
    //     </article>
    // );
}
