"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormInput from "@/components/CustomFormInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { SignIn, SignUp } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";


const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {

    setIsLoading(true);
    
    try {

        if (type === 'sign-up'){
            
            const newUser = await SignUp(values);

            setUser(newUser);
        }

        if (type === 'sign-in'){

            const user = await SignIn(values);

            // Redirect to dashboard if user is authenticated
            if (user) {
              router.push('/');
            }
        }
    }
    catch (error) {
      console.error(error);
      // Handle errors as needed
    }

    setIsLoading(false);

  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="cursor-pointer flex items-center gap-1">
          <Image
            src={"/icons/logo.svg"}
            width={32}
            height={32}
            alt="Steve banking"
          />

          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Steve Banking
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>

        {user ? (
          <div className="flex flex-col gap-4"></div>
        ) : (
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                { type === 'sign-up' && (
                    <>
                        <div className="flex gap-2">
                            <CustomFormInput 
                                control={form.control}
                                name="firstName"
                                label="First Name"
                                placeholder="Ex: Steve"
                            />

                            <CustomFormInput 
                                control={form.control}
                                name="lastName"
                                label="Last Name"
                                placeholder="Ex: Bang"
                            />
                        </div>

                        <CustomFormInput 
                            control={form.control}
                            name="address"
                            label="Address"
                            placeholder="Please enter your address"
                        />
                        <div className="flex gap-2">
                            <CustomFormInput 
                                control={form.control}
                                name="state"
                                label="State"
                                placeholder="Ex: California"
                            />

                            <CustomFormInput 
                                control={form.control}
                                name="postalCode"
                                label="Postal Code"
                                placeholder="Ex: 90001"
                            />
                        </div>

                        <CustomFormInput 
                                control={form.control}
                                name="dateOfBirth"
                                label="Date Of Birth"
                                placeholder="YYYY-MM-DD"
                            />
                    </>
                )

                }

                <CustomFormInput 
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="Please enter your email"
                />

                <CustomFormInput 
                    control={form.control}
                    name="password"
                    label="Password"
                    type={"password"}
                    placeholder="Please enter your password"
                />

                <div className="flex flex-col gap-4">
                    <Button type="submit" className="form-btn" disabled={isLoading}>
                        {
                            isLoading ? (
                                <><Loader2 size={20} className={"animate-spin"} /> &nbsp; Loading...</>
                            ) : (
                                type === "sign-in"? "Sign In" : "Sign Up"
                            )
                        }
                    </Button>
                </div>

              </form>
            </Form>

            <footer className="flex justify-center gap-1">
                <p>
                    { type === 'sign-in' ? "Don't have an account?" : "Already have an account?" }
                    &nbsp;
                    <Link href={`/${type ==='sign-in'?'sign-up' :'sign-in'}`} className="form-link">
                        { type ==='sign-in'? "Sign Up" : "Sign In" }
                    </Link>
                </p>
            </footer>
          </>
        )}
      </header>
    </section>
  );
};

export default AuthForm;
