import type { CurrentConditions } from 'common-template';

import { card, grid, title } from './conditions.css';

interface ConditionsProps {
  conditions: CurrentConditions;
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <div className={card}>
      <h1 className={title}>Current Conditions</h1>
      <div className={grid}>
        <div>Temperature:</div>
        <div>{conditions.temperature} &deg;F</div>
        <div>Wind Speed:</div>
        <div>{conditions.wind} mph</div>
      </div>
    </div>
  );
}
