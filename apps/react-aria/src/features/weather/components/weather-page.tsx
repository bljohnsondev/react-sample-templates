import { useState } from 'react';
import { Button } from 'react-aria-components';
import { type CurrentConditions, getWeatherConditions } from 'react-common-template';
import { useForm } from 'react-hook-form';

import { Conditions } from './conditions';

import { TextField } from '@/components/form/text-field';
import { AppLayout } from '@/components/layout/app-layout';
import { useToastStore } from '@/store/toast-store';

import styles from './weather-page.module.css';

interface FormValues {
  lat: string;
  long: string;
}

export function WeatherPage() {
  const setLoading = useToastStore(state => state.setLoading);
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
    reset();
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>Enter a latitude and longitude in the form below</div>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <TextField control={control} name="lat" required={true} label="Latitude" />
            {errors.lat && <div className="error-message">Latitude is required</div>}
          </div>
          <div className={styles.input}>
            <TextField control={control} name="long" required={true} label="Longitude" />
            {errors.long && <div className="error-message">Longitude is required</div>}
          </div>
        </div>
        <div className="actions">
          <Button type="submit">Get Weather</Button>
          <Button onPress={handleReset}>Reset</Button>
        </div>
        {conditions ? (
          <div>
            <Conditions conditions={conditions} />
          </div>
        ) : null}
      </form>
    </AppLayout>
  );
}
