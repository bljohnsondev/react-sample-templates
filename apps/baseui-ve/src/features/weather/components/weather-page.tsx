import { Field } from '@base-ui-components/react/field';
import clsx from 'clsx';
import { type CurrentConditions, getWeatherConditions } from 'common-template';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/form/button';
import { AppLayout } from '@/components/layout/app-layout';
import { useAppStore } from '@/store/app-store';

import { Conditions } from './conditions';

import { fieldRoot, input, label } from '@/styles/baseui-styles.css';
import { form, inputContainer, input as weatherInput } from './weather.css';

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
          <div>
            <Field.Root className={fieldRoot}>
              <Field.Label className={label}>Latitude</Field.Label>
              <Field.Control
                {...register('lat', { required: 'Lat is required' })}
                className={clsx(input, weatherInput)}
              />
              {errors.lat && <div className="error-message">{errors.lat?.message}</div>}
            </Field.Root>
          </div>
          <div>
            <Field.Root className={fieldRoot}>
              <Field.Label className={label}>Longitude</Field.Label>
              <Field.Control
                {...register('long', { required: 'Long is required' })}
                className={clsx(input, weatherInput)}
              />
              {errors.long && <div className="error-message">{errors.long?.message}</div>}
            </Field.Root>
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
