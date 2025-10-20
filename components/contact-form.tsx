"use client"
import emailjs from "@emailjs/browser";
import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { FormDataType } from "@/lib/types";


type FormErrors = Partial<Record<keyof FormDataType, string>>

type SubmitStatus = "success" | "error" | null

export function ContactForm() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  const userFormData = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "N/A",
    subject: formData.subject,
    message: formData.message,
    inquiryType: formData.inquiryType || "Not specified",
    time: new Date().toLocaleString(),
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      //Save form data to Firestore
      await addDoc(collection(db, "contactMessages"), {
        ...userFormData,
        createdAt: serverTimestamp(),
      })

      //Send email using EmailJS
      const result = await emailjs.send(
        "service_yargote",
        "template_contact",
        userFormData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      console.log("Email sent:", result.text)
      setSubmitStatus("success")

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      })

      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader className="text-center space-y-2 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 w-fit mx-auto">
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Send Message</span>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Let's Start a Conversation
        </CardTitle>
        <p className="text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-emerald-800">Message sent successfully!</p>
              <p className="text-sm text-emerald-700">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-red-800">Failed to send message</p>
              <p className="text-sm text-red-700">Please try again or contact us directly.</p>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`h-12 border-2 ${errors.name
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-200"
                  } focus:ring-2`}
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-12 border-2 ${errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-200"
                  } focus:ring-2`}
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Phone + Inquiry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
            </div>

            {/* Inquiry Type */}
            <div className="space-y-2">
              <Label htmlFor="inquiryType">Inquiry Type</Label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value) => handleInputChange("inquiryType", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                  <SelectItem value="mentorship">Become a Mentor</SelectItem>
                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="donation">Donation Questions</SelectItem>
                  <SelectItem value="program">Program Information</SelectItem>
                  <SelectItem value="media">Media Inquiry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={`h-12 border-2 ${errors.subject
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-200"
                } focus:ring-2`}
              placeholder="Enter the subject of your message"
              disabled={isSubmitting}
            />
            {errors.subject && <p className="text-sm text-red-600">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`border-2 resize-none ${errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-200"
                } focus:ring-2`}
              placeholder="Tell us how we can help you..."
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            <p className="text-xs text-gray-500">{formData.message.length}/500 characters</p>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            size="lg"
            disabled={isSubmitting}
            className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
