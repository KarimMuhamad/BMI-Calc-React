import {useEffect, useState } from "react";

const InputForm = ({onCalculate}) => {
   const [bb, setBb] = useState('');
   const [tb, setTb] = useState('');

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (bb && tb) {
            const bbValue = parseFloat(bb);
            const tbValue = parseFloat(tb) / 100;
            const bmi = bbValue / (tbValue ** 2);
            onCalculate({
               bmi: bmi.toFixed(1),
               bb,
               tb
            });
         }
      }, 500);

      return () => clearTimeout(timeout);

   }, [bb, tb, onCalculate]);

   return (
      <div className="mt-5 grid grid-cols-2 gap-1 w-md h-auto p-2 rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/30 shadow-black/30 shadow-xs dark:bg-gray-500/20 dark:border-gray-500/40">
         <div>
            <label htmlFor="bb" className="block text-sm mb-0.5 font-bold">Berat Badan *kg</label>
            <input id="bb" type="number" className="w-full rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/50 shadow-black/30 dark:bg-gray-500/50 dark:border-gray-500/80 text-center" onChange={(e) => setBb(e.target.value)}/>
         </div>
         <div>
            <label htmlFor="tb" className="block text-sm mb-0.5 font-bold">Tinggi Badan *cm</label>
            <input id="tb" type="number" className="w-full rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/50 shadow-black/30 dark:bg-gray-500/50 dark:border-gray-500/80 text-center" onChange={(e) => setTb(e.target.value)}/>
         </div>
      </div>
   )
}

export default InputForm;