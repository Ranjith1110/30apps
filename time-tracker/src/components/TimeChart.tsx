import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: {activity:string; hours:number}[]
}

const TimeChart = ({ data }: Props) => {

    const chartData = {
        labels: data.map((d) => d.activity),
        datasets: [
            {
                label: "Hours",
                data: data.map((d) => d.hours),
                backgroundColor: [
                    "#ff6384", "#36a2eb", "#ffce56", "#34d399", "#a78bfa"
                ],
                borderWidth: 1
            }
        ]
    }
    

  return (
    <>
    <div className="">
        <Pie data={chartData} />
    </div>
    </>
  )
}

export default TimeChart