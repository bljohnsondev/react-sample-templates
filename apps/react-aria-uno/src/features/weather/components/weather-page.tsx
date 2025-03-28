import { type CurrentConditions, getWeatherConditions } from 'common-template';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Conditions } from './conditions';

import { Button } from '@/components/form/button';
import { TextField } from '@/components/form/text-field';
import { AppLayout } from '@/components/layout/app-layout';
import { useAppStore } from '@/store/app-store';

interface FormValues {
  lat: string;
  long: string;
}

export function WeatherPage() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const setLoading = useAppStore(state => state.setLoading);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      lat: '52.52',
      long: '13.41',
    },
  });

  const [conditions, setConditions] = useState<CurrentConditions | undefined>();

  function handleReset() {
    setConditions(undefined);
    setErrorMessage(undefined);
    reset();
  }

  async function onSubmit(values: FormValues) {
    setLoading(true);

    const response = await getWeatherConditions(values.lat, values.long);
    if (response.error) {
      setErrorMessage(response.errorMessage ?? 'An unknown error occurred');
    } else {
      setConditions(response.json);
    }

    setLoading(false);
  }

  return (
    <AppLayout>
      <h1 className="title">Weather</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>Enter a latitude and longitude in the form below</div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-32">
            <TextField control={control} name="lat" required={true} label="Latitude" />
            {errors.lat && <div className="error-message">Latitude is required</div>}
          </div>
          <div className="w-32">
            <TextField control={control} name="long" required={true} label="Longitude" />
            {errors.long && <div className="error-message">Longitude is required</div>}
          </div>
        </div>
        <div className="actions">
          <Button variant="filled" type="submit">
            Get Weather
          </Button>
          <Button variant="filled" onPress={handleReset}>
            Reset
          </Button>
        </div>
        {errorMessage && <div className="error-message">Error: {errorMessage}</div>}
        {conditions ? (
          <div>
            <Conditions conditions={conditions} />
          </div>
        ) : null}
      </form>
    </AppLayout>
  );
}
