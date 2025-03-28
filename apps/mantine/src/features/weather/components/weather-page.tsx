import { Box, Button, NumberInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { type CurrentConditions, getWeatherConditions } from 'common-template';
import { useState } from 'react';

import { Conditions } from './conditions';
import styles from './weather-page.module.css';

import { AppLayout } from '@/components/layout/app-layout';

interface FormValues {
  lat: string;
  long: string;
}

export function WeatherPage() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [conditions, setConditions] = useState<CurrentConditions | undefined>();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      lat: '52.52',
      long: '13.41',
    },
    validate: {
      lat: isNotEmpty('Latitude is required'),
      long: isNotEmpty('Longitude is required'),
    },
  });

  async function handleSubmit(values: FormValues) {
    setLoading(true);

    const response = await getWeatherConditions(values.lat, values.long);
    if (response.error) {
      setErrorMessage(response.errorMessage ?? 'An unknown error occurred');
    } else {
      setConditions(response.json);
    }

    setLoading(false);
  }

  function handleReset() {
    setConditions(undefined);
    setErrorMessage(undefined);
    form.reset();
  }

  return (
    <AppLayout>
      <h1 className="title">Weather</h1>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box mb="sm">Enter a latitude and longitude in the form below</Box>
        <Box mb="sm" className={styles.inputContainer}>
          <div className={styles.input}>
            <NumberInput key={form.key('lat')} label="Latitude" {...form.getInputProps('lat')} />
          </div>
          <div className={styles.input}>
            <NumberInput key={form.key('long')} label="Longitude" {...form.getInputProps('long')} />
          </div>
        </Box>
        <div className="actions">
          <Button loading={loading} type="submit">
            Get Weather
          </Button>
          <Button variant="default" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {errorMessage && <div className="error-message">Error: {errorMessage}</div>}
        {conditions ? (
          <Box mt="sm">
            <Conditions conditions={conditions} />
          </Box>
        ) : null}
      </form>
    </AppLayout>
  );
}
