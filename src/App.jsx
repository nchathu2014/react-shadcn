import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  const doInc = (numVal) => {
    // All three calls read the same count value from the current render. If count = 0, all three are essentially:
    // setCount(count + 1) // Short hand notation
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount((preVal) => preVal + numVal + 1);
    // setCount((preVal) => preVal + 1);
    // setCount((preVal) => preVal + 1);
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1>ReactJs with shadcn</h1>
        <h2>Count is {count}</h2>
        <div className="flex gap-2">
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
          <Button onClick={() => setCount((count) => Math.max(count - 1, 0))}>
            Decrease
          </Button>
          <Button variant="destructive" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
        <div className="mt-2 flex gap-2">
          <Input
            placeholder="Enter counter value"
            type="number"
            value={countToSet}
            onChange={(e) => setCountToSet(Number(e.target.value))}
          />
          <Button
            variant="outline"
            onClick={() => {
              setCount(Number(countToSet));
              setCountToSet(0);
            }}
          >
            Set to {countToSet}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
