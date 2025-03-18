import { Button } from '@mantine/core';
import { useState } from 'react';

import styles from './counter-page.module.css';

import { AppLayout } from '@/components/layout/app-layout';

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
      <div className={styles.counter}>
        {count > 10
          ? 'Enough with the clicking!'
          : count > 0
            ? `You clicked the button ${count} time${count === 1 ? '' : 's'}`
            : 'This is a test template'}
      </div>
      <div className="actions">
        <Button disabled={count > 10} onClick={handleClick}>
          Count
        </Button>
        <Button disabled={count < 1} variant="default" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </AppLayout>
  );
}
