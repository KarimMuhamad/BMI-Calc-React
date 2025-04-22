const InfoResult = ({ bmi, bb, tb }) => {
   const idealMin = 18.5 * (tb / 100) ** 2;
   const idealMax = 24.9 * (tb / 100) ** 2;

   let pesan = '';
   let category = '';
   let selisih = 0;

   if (bmi < 18.5) {
      selisih = (idealMin - bb).toFixed(0);
      category = 'Kekurangan berat badan';
      pesan = (
         <>Berat badan kamu kurang <span className="text-red-500 font-bold"> {selisih} kg</span> dari batas normal.</>
      );
   } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal (ideal)';
      pesan = <span className="text-green-600 font-semibold">Berat badan kamu sudah ideal, pertahankan!!!</span>;
   } else {
      category = 'Kelebihan berat badan';
      selisih = (bb - idealMax).toFixed(0);
      pesan = (
         <>Berat badan kamu lebih <span className="text-red-500 font-bold"> {selisih} kg</span> dari batas normal.</>
      );
   }

   return (
      <div className="mt-5 relative flex flex-col items-center justify-center w-md h-auto p-2 rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/30 shadow-black/30 shadow-xs dark:bg-gray-500/20 dark:border-gray-500/40">
         {isNaN(bmi) ? <p className="font-semibold">Silahkan Inputkan data terlebih dahulu </p> : pesan}
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Kategori: {isNaN(bmi) ? <span className="font-medium">Kosong</span> : <span className="font-medium">{category}</span>}
        </p>
      </div>
   );
};

export default InfoResult;
