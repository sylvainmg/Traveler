import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function MyBarChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            {
                label: "Ventes",
                data: [10, 20, 15],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { position: "top" as const } },
    };

    return <Bar data={data} options={options} />;
}
