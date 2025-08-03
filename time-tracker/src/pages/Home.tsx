import TimeForm from "@/components/TimeForm"
import TimeChart from "@/components/TimeChart"
import { useState } from "react"


const Home = () => {

    const [data, setData] = useState<{activity:string; hours:number}[]>([]);

    const handleAdd = (activity:string, hours:number) => {
        
        setData((prev) => [...prev, {activity, hours}]);
        console.log(data);
        
        
    };
    
  return (
    <>
    <div className="max-w-md mx-auto p-6 mt-10 bg-gray-100 rounded showdow space-y-6">
        <h2 className="text-2xl font-bold">🕧Time Tracker</h2>
        <TimeForm onAdd={handleAdd}/>
        <TimeChart data={data} />
    </div>
    </>
  )
}

export default Home