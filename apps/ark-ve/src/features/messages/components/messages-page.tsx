import { Field } from '@ark-ui/react/field';
import { Tabs } from '@ark-ui/react/tabs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/form/button';
import { AppLayout } from '@/components/layout/app-layout';
import { useToast } from '@/components/toast/toast-provider';

import { InlineToast } from './inline-toast';

import { inlineMessages, newMessageContent, newMessageInput } from './messages-page.css';

interface FormValues {
  message: string;
}

export interface Message {
  id: string;
  message: string;
}

export function MessagesPage() {
  const toaster = useToast();
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

    setMessages([
      ...messages,
      {
        id,
        message: values.message,
      },
    ]);

    toaster.create({
      description: values.message,
      type: 'success',
    });

    reset();
  }

  return (
    <AppLayout>
      <h1 className="title">Messages</h1>
      <Tabs.Root defaultValue="new">
        <Tabs.List>
          <Tabs.Trigger value="new">New Message</Tabs.Trigger>
          <Tabs.Trigger value="prev">Prev Messages</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="new">
          <form onSubmit={handleSubmit(onSubmit)} className={newMessageContent}>
            <div>Enter your message below</div>
            <Field.Root invalid={Boolean(errors.message)}>
              <Field.Label>Message</Field.Label>
              <Field.Input
                placeholder="Enter message"
                className={newMessageInput}
                {...register('message', { required: 'Message is required' })}
              />
              <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
            </Field.Root>
            <div className="actions">
              <Button type="submit" variant="primary">
                Message
              </Button>
            </div>
          </form>
        </Tabs.Content>
        <Tabs.Content value="prev">
          <div className={inlineMessages}>
            {messages.length === 0 ? (
              <div>No previous messages sent</div>
            ) : (
              messages.map(message => (
                <InlineToast key={`ml-${message.id}`} message={message} onClose={handleRemoveMessage} />
              ))
            )}
          </div>
          <div className="actions">
            <Button variant="primary" disabled={messages.length === 0} onClick={handleClearMessages}>
              Clear
            </Button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </AppLayout>
  );
}
