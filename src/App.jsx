import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";

function App() {
  const [amt,setAmt]= useState(0)
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="default">Click me</Button>
        </TooltipTrigger>
        <TooltipContent>Bhai This Tool Tip</TooltipContent>
      </Tooltip>
      <h1>Amount: {amt}</h1>
      <div className="flex items-center gap-2.5 w-fit mx-auto">
        <Button onClick={() => setAmt(amt+1)}>Increment</Button>
        <Button onClick={() => setAmt(amt >0 ? amt-1 : 0)}>Decrement</Button>
      </div>
    </>
  );
}

export default App;