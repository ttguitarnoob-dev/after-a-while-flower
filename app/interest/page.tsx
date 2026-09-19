"use client";

import { MailIcon } from "@/components/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextArea,
  TextField,
} from "@heroui/react";
import { useState } from "react";



export default function InterestPage() {
  // const API = "https://web-dev2.kitty-cottage.com/api/flowers/inquiry"
  const API = "https://kitty-cottage.kitty-cottage.com/api/flowers/inquiry"


  const [message, setMessage] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("The user experience of this form is not finished yet, but your inquiry did go through. Thank you!")
    console.log("SENDINGTO API", API)

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

     

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      window.location.href = '/success';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="flex w-full flex-col items-center justify-center px-4">
        <section className="mb-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Interest Form
          </h1>
  
          <p className="mt-2 text-sm text-default-500">
            Interested in working with us? Fill out the form below and let us
            know a little about your business and what you&apos;re looking for.
            We&apos;ll be in touch with you soon.
          </p>
        </section>
  
        <Form
          className="flex w-full max-w-md flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField isRequired name="businessName">
            <Label>Business Name</Label>
            <Input placeholder="Pepe's Pizza" />
            <FieldError />
          </TextField>
  
          <TextField isRequired name="contactName">
            <Label>Contact Name</Label>
            <Input placeholder="Pepe Italiano" />
            <FieldError />
          </TextField>
  
          <TextField isRequired name="phone" type="tel">
            <Label>Phone</Label>
            <Input placeholder="(555) 123-4567" />
            <FieldError />
          </TextField>
  
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
  
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="pepe@email.com" />
            <FieldError />
          </TextField>
  
          <TextField name="message">
            <Label>Message</Label>
            <TextArea
              aria-label="Inquiry"
              className="h-32 w-full"
              name="message"
              placeholder="Any additional information you'd like to provide..."
            />
          </TextField>
  
          <div className="flex justify-center gap-2">
            <Button type="submit">
              <MailIcon />
              Submit
            </Button>
  
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <p>{message}</p>
  
        <section className="mt-6 text-center text-sm text-default-500">
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
        </section>
      </section>
    </>
  );
}