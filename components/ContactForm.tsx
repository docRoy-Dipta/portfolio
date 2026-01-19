"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = JSON.stringify({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      state: formData.get("state"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (res.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-base">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            required
            disabled={isSubmitting}
            className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-base">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            required
            disabled={isSubmitting}
            className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">
          Phone number
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          disabled={isSubmitting}
          className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
        />
      </div>

      {/* City and State */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-base">
            City <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="city"
            name="city"
            required
            disabled={isSubmitting}
            className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="text-base">
            State/Region <span className="text-destructive">*</span>
          </Label>
          <Select name="state" required disabled={isSubmitting}>
            <SelectTrigger className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="ca">California</SelectItem>
              <SelectItem value="tx">Texas</SelectItem>
              <SelectItem value="fl">Florida</SelectItem>
              <SelectItem value="il">Illinois</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-base">
          What brings you to OrynTel today? <span className="text-destructive">*</span>
        </Label>
        <Select name="subject" required disabled={isSubmitting}>
          <SelectTrigger className="border-b-2 border-t-0 border-x-0 rounded-none px-0 focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="services">Services Question</SelectItem>
            <SelectItem value="project">New Project</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          disabled={isSubmitting}
          className="border-b-2 border-t-0 border-x-0 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-primary"
        />
      </div>

      {/* Privacy Policy */}
      <div className="text-sm text-muted-foreground">
        View{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full md:w-auto px-12 py-6 text-base" 
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="mr-2">Sending...</span>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
          </>
        ) : (
          <>
            SUBMIT
          </>
        )}
      </Button>
    </form>
  );
}
