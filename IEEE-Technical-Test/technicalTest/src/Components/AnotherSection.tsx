interface Props{
  n : number;
}

function anotherSection({n} : Props) {
  return (
    <>
      <ul className="flex items-center justify-between w-6/12 ml-29p mb-9 text-sm">
        <li className={`before:inline-block before:content-['1'] before:mr-1 before:rounded-full ${n==1 ? "before:bg-blue-900 before:text-white before:w-5 before:h-5 before:text-center" : "before:bg-gray-300 before:text-gray-400 before:w-5 before:h-5 before:text-center text-gray-400"}`}>Rules Agreement</li>
        <li className={`before:inline-block before:content-['2'] before:mr-1 before:rounded-full ${n==2 ? "before:bg-blue-900 before:text-white before:w-5 before:h-5 before:text-center" : "before:bg-gray-300 before:text-gray-400 before:w-5 before:h-5 before:text-center text-gray-400"}`}>General Details</li>
        <li className={`before:inline-block before:content-['3'] before:mr-1 before:rounded-full ${n==3 ? "before:bg-blue-900 before:text-white before:w-5 before:h-5 before:text-center" : "before:bg-gray-300 before:text-gray-400 before:w-5 before:h-5 before:text-center text-gray-400"}`}>Outcome Request</li>
        <li className={`before:inline-block before:content-['4'] before:mr-1 before:rounded-full ${n==4 ? "before:bg-blue-900 before:text-white before:w-5 before:h-5 before:text-center" : "before:bg-gray-300 before:text-gray-400 before:w-5 before:h-5 before:text-center text-gray-400"}`}>Banking Details</li>
      </ul>
    </>
  );
}

export default anotherSection;
