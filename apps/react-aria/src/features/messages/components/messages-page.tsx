import { useState } from 'react';
import { Button, Input, Label, Tab, TabList, TabPanel, Tabs, TextField } from 'react-aria-components';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { AppLayout } from '@/components/layout/app-layout';
import { InlineToast } from '@/components/toast/inline-toast';
import { useToastStore } from '@/store/toast-store';

import styles from './messages-page.module.css';

interface FormValues {
  message: string;
}

interface Message {
  id: string;
  message: string;
}

export function MessagesPage() {
  const toastState = useToastStore(store => store.toastState);
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
    if (toastState) {
      const id = uuidv4();

      setMessages([
        ...messages,
        {
          id,
          message: values.message,
        },
      ]);

      toastState.add({ id, message: values.message, level: 'success' }, { timeout: 5000 });

      reset();
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>Enter your message below</div>
            <div className={styles.messagesInput}>
              <TextField>
                <Label>Message</Label>
                <Input placeholder="Enter message" {...register('message', { required: true })} />
              </TextField>
              {errors.message && <div className="error-message">Message is required</div>}
            </div>
            <div className="actions">
              <Button type="submit">Message</Button>
            </div>
          </form>
        </TabPanel>
        <TabPanel id="prev">
          <div className={styles.messageList}>
            {messages.length === 0 ? (
              <div>No previous messages sent</div>
            ) : (
              messages.map(message => (
                <InlineToast
                  id={message.id}
                  key={`ml-${message.id}`}
                  level="success"
                  onClose={mid => handleRemoveMessage(mid)}
                >
                  {message.message}
                </InlineToast>
              ))
            )}
          </div>
          <div className="actions">
            <Button isDisabled={messages.length === 0} onPress={handleClearMessages}>
              Clear
            </Button>
          </div>
        </TabPanel>
      </Tabs>
    </AppLayout>
  );
}
