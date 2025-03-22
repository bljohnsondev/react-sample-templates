import type { CurrentConditions } from 'react-common-template';

import { Card } from '@/components/card';

import styles from './conditions.module.css';

interface ConditionsProps {
  conditions: CurrentConditions;
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <Card className={styles.conditionsCard}>
      <div className={styles.conditionsTitle}>Current Conditions</div>
      <div className={styles.conditionsGrid}>
        <div>Temperature:</div>
        <div>{conditions.temperature} &deg;F</div>
        <div>Wind Speed:</div>
        <div>{conditions.wind} mph</div>
      </div>
    </Card>
  );
}
