import { useState } from 'react';
import { Button } from 'react-aria-components';

import { AppLayout } from '@/components/layout/app-layout';

import styles from './counter-page.module.css';

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
        <Button isDisabled={count > 10} onPress={handleClick}>
          Count
        </Button>
        <Button isDisabled={count < 1} onPress={handleReset}>
          Reset
        </Button>
      </div>
    </AppLayout>
  );
}
