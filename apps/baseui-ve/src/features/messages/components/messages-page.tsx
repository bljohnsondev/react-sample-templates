import { Field } from '@base-ui-components/react/field';
import { Tabs } from '@base-ui-components/react/tabs';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/form/button';
import { AppLayout } from '@/components/layout/app-layout';

import { Toast, toast } from '@/components/toast';

import { input, label, tab, tabPanel, tabsList } from '@/styles/baseui-styles.css';
import { inlineMessages, newMessageContent, newMessageInput } from './messages-page.css';

interface FormValues {
  message: string;
}

export interface Message {
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
      <Tabs.Root defaultValue="new">
        <Tabs.List className={tabsList}>
          <Tabs.Tab value="new" className={tab}>
            New Message
          </Tabs.Tab>
          <Tabs.Tab value="prev" className={tab}>
            Prev Messages
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="new" className={tabPanel}>
          <form onSubmit={handleSubmit(onSubmit)} className={newMessageContent}>
            <div>Enter your message below</div>
            <Field.Root className={newMessageContent}>
              <Field.Label className={label}>Message</Field.Label>
              <Field.Control
                placeholder="Enter message"
                {...register('message', { required: 'Message is required' })}
                className={clsx(input, newMessageInput)}
              />
              {errors.message && <div className="error-message">{errors.message?.message}</div>}
            </Field.Root>
            <div className="actions">
              <Button type="submit" variant="primary">
                Message
              </Button>
            </div>
          </form>
        </Tabs.Panel>
        <Tabs.Panel value="prev" className={tabPanel}>
          {messages.length === 0 ? (
            <div className="page-content">No previous messages sent</div>
          ) : (
            <div className={inlineMessages}>
              {messages.map(message => (
                <Toast key={`it-${message.id}`} variant="inline" toast={message} onClose={handleRemoveMessage} />
              ))}
            </div>
          )}
          <div className="actions">
            <Button variant="primary" disabled={messages.length === 0} onClick={handleClearMessages}>
              Clear
            </Button>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </AppLayout>
  );
}
