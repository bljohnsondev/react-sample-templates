import type { CurrentConditions } from 'react-common-template';

import { Card } from '@/components/card';

interface ConditionsProps {
  conditions: CurrentConditions;
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <Card className="w-auto md:w-[20rem]">
      <div className="font-semibold mb-3">Current Conditions</div>
      <div className="grid grid-cols-[8rem_1fr] gap-1">
        <div>Temperature:</div>
        <div>{conditions.temperature} &deg;F</div>
        <div>Wind Speed:</div>
        <div>{conditions.wind} mph</div>
      </div>
    </Card>
  );
}
