import HorizonBar from "./HorizonBar";

const Result = ({bmi}) => {

   return (
      <div className="relative flex flex-col items-center justify-center w-md h-auto p-2 rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/30 shadow-black/30 shadow-xs dark:bg-gray-500/20 dark:border-gray-500/40">
         <p>{bmi}</p>  
         <HorizonBar bmi={bmi}/>
         <div className="flex flex-row items-center justify-between w-full h-full">
            <p className="text-sm">10.0</p>
            <p className="text-sm">40.0</p>
         </div>
      </div>
   );
}

export default Result;