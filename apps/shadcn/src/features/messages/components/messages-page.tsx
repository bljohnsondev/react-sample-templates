import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

import { AppLayout } from '@/components/layout/app-layout';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FormValues {
  message: string;
}

interface Message {
  id: string;
  message: string;
}

export function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const form = useForm<FormValues>({
    defaultValues: {
      message: '',
    },
  });

  function handleClearMessages() {
    setMessages([]);
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

    toast(values.message, { duration: 100000 });

    form.reset();
  }

  return (
    <AppLayout>
      <h1 className="title">Messages</h1>
      <Tabs defaultValue="new" className="block">
        <TabsList className="w-[300px]">
          <TabsTrigger value="new">New Message</TabsTrigger>
          <TabsTrigger value="prev">Prev Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="my-3">Enter your message below</div>
              <div className="w-[30rem] mb-3">
                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: 'Message is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter message" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="actions">
                <Button type="submit">Message</Button>
              </div>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="prev">
          <article className="my-4 flex flex-col gap-3">
            {messages.length === 0 ? (
              <div>No previous messages sent</div>
            ) : (
              messages.map(message => (
                <Alert key={`m-${message.id}`} variant="success">
                  <AlertDescription>{message.message}</AlertDescription>
                </Alert>
              ))
            )}
          </article>
          <Button type="button" onClick={handleClearMessages}>
            Clear
          </Button>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
