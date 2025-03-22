import { Card, Text } from '@mantine/core';

import type { CurrentConditions } from 'react-common-template';

import styles from './conditions.module.css';

interface ConditionsProps {
  conditions: CurrentConditions;
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <Card className={styles.conditionsCard}>
      <Text mb="sm" fw={700}>
        Current Conditions
      </Text>
      <div className={styles.conditionsGrid}>
        <div>Temperature:</div>
        <div>{conditions.temperature} &deg;F</div>
        <div>Wind Speed:</div>
        <div>{conditions.wind} mph</div>
      </div>
    </Card>
  );
}
