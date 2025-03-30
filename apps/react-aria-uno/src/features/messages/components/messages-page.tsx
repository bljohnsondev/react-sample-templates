import { useState } from 'react';
import { Input, Label, Tab, TabList, TabPanel, Tabs, TextField } from 'react-aria-components';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/form/button';
import { AppLayout } from '@/components/layout/app-layout';
import { Toast, toast } from '@/components/toast';

interface FormValues {
  message: string;
}

interface Message {
  id: string;
  message: string;
}

export function MessagesPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [messages, setMessages] = useState<Message[]>([]);

  function handleClearMessages() {
    setMessages([]);
  }

  function handleRemoveMessage(id: string) {
    setMessages(messages.filter(m => m.id !== id));
  }

  function onSubmit(values: FormValues) {
    const id = uuidv4();

    const message = {
      id,
      message: values.message,
    };

    setMessages([...messages, message]);
    toast(message);

    reset();
  }

  return (
    <AppLayout>
      <h1 className="title">Messages</h1>
      <Tabs>
        <TabList aria-label="Messages Tabs">
          <Tab id="new">New Message</Tab>
          <Tab id="prev">Prev Messages</Tab>
        </TabList>
        <TabPanel id="new">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div>Enter your message below</div>
            <div className="w-full md:w-[30rem] mb-2">
              <TextField>
                <Label>Message</Label>
                <Input placeholder="Enter message" {...register('message', { required: true })} />
              </TextField>
              {errors.message && <div className="error-message">Message is required</div>}
            </div>
            <div className="actions">
              <Button variant="filled" type="submit">
                Message
              </Button>
            </div>
          </form>
        </TabPanel>
        <TabPanel id="prev">
          <div>
            {messages.length === 0 ? (
              <div className="mb-4">No previous messages sent</div>
            ) : (
              <div className="mb-4 flex flex-col items-stretch gap-2">
                {messages.map(message => (
                  <Toast key={`it-${message.id}`} toast={message} onClose={handleRemoveMessage} className="md:w-full" />
                ))}
              </div>
            )}
          </div>
          <div className="actions">
            <Button variant="filled" isDisabled={messages.length === 0} onPress={handleClearMessages}>
              Clear
            </Button>
          </div>
        </TabPanel>
      </Tabs>
    </AppLayout>
  );
}
