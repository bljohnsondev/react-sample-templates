import { Box, Button, Notification, Tabs, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './messages-page.module.css';

import { AppLayout } from '@/components/layout/app-layout';

interface FormValues {
  message: string;
}

interface Message {
  id: string;
  message: string;
}

export function MessagesPage() {
  const [activeTab, setActiveTab] = useState('new');
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
    validate: {
      message: isNotEmpty('Message is required'),
    },
  });

  function handleChangeTab(value: string | null) {
    if (value) setActiveTab(value);
  }

  function handleClearMessages() {
    setMessages([]);
  }

  function handleRemoveMessage(id: string) {
    setMessages(messages.filter(m => m.id !== id));
  }

  function handleSubmit(values: FormValues) {
    setMessages([
      ...messages,
      {
        id: uuidv4(),
        message: values.message,
      },
    ]);

    notifications.show({
      title: 'Message',
      message: values.message,
      color: 'green',
    });

    form.reset();
  }

  return (
    <AppLayout>
      <h1 className="title">Messages</h1>
      <Tabs value={activeTab} variant="outline" defaultValue="new" onChange={handleChangeTab}>
        <Tabs.List>
          <Tabs.Tab value="new">New Message</Tabs.Tab>
          <Tabs.Tab value="previous">Prev Messages</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="new">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Box mb="xs">Enter your message below</Box>
            <div className={styles.messagesInput}>
              <TextInput
                key={form.key('message')}
                label="Message"
                placeholder="Enter message"
                {...form.getInputProps('message')}
              />
            </div>
            <div className="actions">
              <Button type="submit">Message</Button>
            </div>
          </form>
        </Tabs.Panel>
        <Tabs.Panel value="previous">
          <div className={styles.messagelist}>
            {messages.length === 0 ? (
              <div>No previous messages sent</div>
            ) : (
              messages.map(message => (
                <Notification
                  key={`nl-${message.id}`}
                  title="Message"
                  color="green"
                  onClose={() => handleRemoveMessage(message.id)}
                >
                  {message.message}
                </Notification>
              ))
            )}
          </div>
          <div className="actions">
            <Button disabled={messages.length === 0} onClick={handleClearMessages}>
              Clear
            </Button>
          </div>
        </Tabs.Panel>
      </Tabs>
    </AppLayout>
  );
}
