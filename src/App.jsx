import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import UpdateCount from "./components/counter/UpdateCount";

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-fit flex items-center justify-center ">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">

        <h2 className="text-lg font-semibold text-gray-500 mb-4">
          Redux Counter
        </h2>

        <h1 className="text-6xl font-bold text-gray-900 mb-8">{count}</h1>

        <div className="flex justify-center gap-3">

          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 text-lg font-semibold text-white bg-green-500 rounded-xl hover:bg-green-600 active:scale-95 transition"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 text-lg font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 active:scale-95 transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-xl hover:bg-indigo-600 active:scale-95 transition"
          >
            Reset
          </button>
          
        </div>
      </div>
      <UpdateCount />
    </div>
  );
}

export default App;