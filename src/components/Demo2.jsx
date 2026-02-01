import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  console.log(ref)

  const timerRef = useRef(null)

  useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log("Ref Hook Running")
   }, 1000)

   return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="m-4 p-2 border border-black w-96 h-96 bg-slate-50">
      <div>
        <button
          className="px-2 py-1 m-2 border border-black bg-green-500"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let: {x}</span>
      </div>
      <div>
        <button
          className="px-2 py-1 m-2 border border-black bg-green-500"
          onClick={() => {
            setY((prev) => prev + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">Let: {y}</span>
      </div>
         <div>
        <button
          className="px-2 py-1 m-2 border border-black bg-green-500"
          onClick={() => {
            ref.current = ref.current + 1
            console.log("Ref=", ref.current)
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref: {ref.current}</span>
      </div>
       <button
          className="px-2 py-2 m-2 border border-black bg-red-700 text-white"
          onClick={() => {
          clearInterval(timerRef.current)
          }}
        >
          Stop Printing
        </button>
    </div>
  );
};

export default Demo2;
