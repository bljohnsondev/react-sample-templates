import { useState } from 'react';

import { AppLayout } from '@/components/layout/app-layout';
import { Button } from '@/components/ui/button';

export function CounterPage() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <AppLayout>
      <h1 className="title">Counter</h1>
      <div className="mb-3">
        {count > 10
          ? 'Enough with the clicking!'
          : count > 0
            ? `You clicked the button ${count} time${count === 1 ? '' : 's'}`
            : 'This is a test template'}
      </div>
      <div className="flex gap-2">
        <Button disabled={count > 10} onClick={handleClick}>
          Count
        </Button>
        <Button disabled={count < 1} onClick={handleReset}>
          Reset
        </Button>
      </div>
    </AppLayout>
  );
}
