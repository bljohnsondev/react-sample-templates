import type { CurrentConditions } from 'react-common-template';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConditionsProps {
  conditions: CurrentConditions;
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <Card className="mt-4 w-[400px]">
      <CardHeader>
        <CardTitle className="text-conditions-title">Current Conditions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[10rem_1fr] text-conditions-foreground">
        <div>Temperature:</div>
        <div>{conditions.temperature} &deg;F</div>
        <div>Wind Speed:</div>
        <div>{conditions.wind} mph</div>
      </CardContent>
    </Card>
  );
}
