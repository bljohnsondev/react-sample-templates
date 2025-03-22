import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { type CurrentConditions, getWeatherConditions } from 'react-common-template';

import { Conditions } from './conditions';

import { AppLayout } from '@/components/layout/app-layout';

interface FormValues {
  lat: string;
  long: string;
}

export function WeatherPage() {
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      lat: '52.52',
      long: '13.41',
    },
  });

  const [conditions, setConditions] = useState<CurrentConditions | undefined>();

  function handleReset() {
    setConditions(undefined);
    form.reset();
  }

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const conditions = await getWeatherConditions(values.lat, values.long);
    setLoading(false);
    setConditions(conditions);
  }

  return (
    <AppLayout>
      <h1 className="title">Weather</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>Enter a latitude and longitude in the form below</div>
          <div className="flex flex-col md:flex-row items-start gap-4 my-3">
            <div className="w-30">
              <FormField
                control={form.control}
                name="lat"
                rules={{ required: 'Lat is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input placeholder="Lat" {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-30">
              <FormField
                control={form.control}
                name="long"
                rules={{ required: 'Long is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input placeholder="Long" {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="actions">
            <Button type="submit" disabled={loading} className="w-full md:w-auto">
              {loading && <Loader2 className="animate-spin" />}
              Get Weather
            </Button>
            <Button type="button" onClick={handleReset} className="w-full md:w-auto">
              Reset
            </Button>
          </div>
          {conditions && (
            <div>
              <Conditions conditions={conditions} />
            </div>
          )}
        </form>
      </Form>
    </AppLayout>
  );
}
