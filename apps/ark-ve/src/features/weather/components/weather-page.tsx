import { Field } from '@ark-ui/react/field';
import { type CurrentConditions, getWeatherConditions } from 'common-template';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/form/button';
import { AppLayout } from '@/components/layout/app-layout';
import { useAppStore } from '@/store/app-store';

import { Conditions } from './conditions';

import { form, input, inputContainer } from './weather.css';

interface FormValues {
  lat: string;
  long: string;
}

export function WeatherPage() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const setLoading = useAppStore(state => state.setLoading);
  const {
    register,
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
      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <div>Enter a latitude and longitude in the form below</div>
        <div className={inputContainer}>
          <div className={input}>
            <Field.Root invalid={Boolean(errors.lat)}>
              <Field.Label>Latitude</Field.Label>
              <Field.Input {...register('lat', { required: 'Lat is required' })} />
              <Field.ErrorText>{errors.lat?.message}</Field.ErrorText>
            </Field.Root>
            {errors.lat && <div className="error-message">Latitude is required</div>}
          </div>
          <div className={input}>
            <Field.Root invalid={Boolean(errors.long)}>
              <Field.Label>Longitude</Field.Label>
              <Field.Input {...register('long', { required: 'Long is required' })} />
              <Field.ErrorText>{errors.long?.message}</Field.ErrorText>
            </Field.Root>
            {errors.long && <div className="error-message">Longitude is required</div>}
          </div>
        </div>
        <div className="actions">
          <Button variant="primary" type="submit">
            Get Weather
          </Button>
          <Button onClick={handleReset}>Reset</Button>
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
