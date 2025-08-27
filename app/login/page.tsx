"use client";
import React, { useState } from "react";
import { subtitle, title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function BlogPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const getPasswordErrorMessage = (value: string) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (value.length > 20) {
      return "Password must be less than 20 characters long";
    } else if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password must contain at least one uppercase letter";
    }
    return "";
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    setName(form.name as string);
    setEmail(form.email as string);
    setPassword(form.password as string);

    try {
      const res = await fetch("http://localhost:5100/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      setResult(data.data.token || "Registration successful!");
      setSubmitted(true);
    } catch (error) {
      console.error("Error during registration:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-row gap-10 min-h-max justify-center pt-10 items-center">
      {/* Left Section */}
      <section className="w-1/2">
        <h1 className={title({})}>Sign up to get the best of ResumeAI!</h1>
        <h1 className={subtitle({})}>Start building your resume now</h1>
      </section>

      {/* Right Section */}
      <section className="w-1/2 flex items-center justify-center p-10 rounded-xl">
        <Form className="w-3/4 max-w-md gap-4" onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 w-full">
            {/* Name Input */}
            <Input
              isRequired
              type="text"
              placeholder="Your Name"
              label="Name"
              labelPlacement="outside"
              name="name"
              errorMessage="Name is required"
            />

            {/* Email Input */}
            <Input
              isRequired
              type="email"
              placeholder="Enter your email"
              label="Email"
              labelPlacement="outside"
              name="email"
              errorMessage="Please enter a valid email"
            />

            {/* Password Input */}
            <Input
              isRequired
              type="password"
              placeholder="Password"
              label="Password"
              labelPlacement="outside"
              name="password"
              errorMessage="Password must be at least 8 characters long"
              pattern=".{8,}"
            />

            {/* Submit Button */}
            <Button type="submit" color="primary" disabled={submitted}>
              {submitted ? "Submitted" : "Sign Up"}
            </Button>

            {/* Result Message */}
            {submitted && (
              <div className="text-green-500 mt-2">{result}</div>
            )}
          </div>
        </Form>
      </section>
    </div>
  );
}
