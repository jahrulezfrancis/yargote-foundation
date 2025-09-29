"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  CheckCircle, 
  AlertCircle,
  User,
  Briefcase,
  GraduationCap,
  FileText
} from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  
  // Contact Information
  address: string
  city: string
  state: string
  zipCode: string
  
  // Professional Information
  occupation: string
  employer: string
  education: string
  
  // Volunteer Preferences
  volunteerAreas: string[]
  availability: string[]
  timeCommitment: string
  previousExperience: string
  
  // Background & Motivation
  motivation: string
  skills: string
  references: string
  
  // Agreements
  backgroundCheck: boolean
  dataConsent: boolean
  commitment: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  occupation: "",
  employer: "",
  education: "",
  volunteerAreas: [],
  availability: [],
  timeCommitment: "",
  previousExperience: "",
  motivation: "",
  skills: "",
  references: "",
  backgroundCheck: false,
  dataConsent: false,
  commitment: false,
}

const volunteerAreas = [
  "Mentorship & Guidance",
  "Educational Support",
  "Life Skills Training",
  "Career Development",
  "Sports & Recreation",
  "Arts & Creative Programs",
  "Technology Training",
  "Administrative Support",
  "Event Organization",
  "Fundraising"
]

const availabilityOptions = [
  "Weekday Mornings",
  "Weekday Afternoons", 
  "Weekday Evenings",
  "Weekend Mornings",
  "Weekend Afternoons",
  "Weekend Evenings"
]

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
  "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", 
  "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", 
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
]

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 4

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        if (!formData.gender) newErrors.gender = "Please select your gender"
        break

      case 2: // Contact & Professional
        if (!formData.address.trim()) newErrors.address = "Address is required"
        if (!formData.city.trim()) newErrors.city = "City is required"
        if (!formData.state) newErrors.state = "Please select your state"
        if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required"
        break

      case 3: // Volunteer Preferences
        if (formData.volunteerAreas.length === 0) {
          newErrors.volunteerAreas = "Please select at least one volunteer area"
        }
        if (formData.availability.length === 0) {
          newErrors.availability = "Please select your availability"
        }
        if (!formData.timeCommitment) newErrors.timeCommitment = "Time commitment is required"
        if (!formData.motivation.trim()) newErrors.motivation = "Please tell us your motivation"
        break

      case 4: // Final agreements
        if (!formData.backgroundCheck) {
          newErrors.backgroundCheck = "Background check consent is required"
        }
        if (!formData.dataConsent) {
          newErrors.dataConsent = "Data processing consent is required"
        }
        if (!formData.commitment) {
          newErrors.commitment = "Commitment acknowledgment is required"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleArrayChange = (field: "volunteerAreas" | "availability", value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">Application Submitted!</h3>
              <p className="text-emerald-700">
                Thank you for your interest in volunteering with us. We'll review your application and get back to you within 5-7 business days.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-emerald-600">
                <strong>Next Steps:</strong> You'll receive a confirmation email shortly. Our volunteer coordinator will contact you to schedule an orientation session.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Volunteer Application</h2>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <Card className="border-gray-200">
        <CardContent className="p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.firstName ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.lastName ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.dateOfBirth ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.gender ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.gender}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact & Professional Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Contact & Professional Details</h3>
                  <p className="text-gray-600">Where can we reach you and what's your background?</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                    errors.address ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your full address"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.city ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.state ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select state</option>
                    {nigerianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.state}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="ZIP code"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occupation *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange("occupation", e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.occupation ? "border-red-300 bg-red-50" : "border-gray-300"
                      }`}
                      placeholder="Your current occupation"
                    />
                  </div>
                  {errors.occupation && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.occupation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employer/Organization
                  </label>
                  <input
                    type="text"
                    value={formData.employer}
                    onChange={(e) => handleInputChange("employer", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Current employer (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education Level
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select education level</option>
                    <option value="secondary">Secondary School</option>
                    <option value="diploma">Diploma/Certificate</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD/Doctorate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Volunteer Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Volunteer Preferences</h3>
                  <p className="text-gray-600">Tell us how you'd like to help</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest * <span className="text-gray-500">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {volunteerAreas.map((area) => (
                    <label key={area} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.volunteerAreas.includes(area)}
                        onChange={() => handleArrayChange("volunteerAreas", area)}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
                {errors.volunteerAreas && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.volunteerAreas}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Availability * <span className="text-gray-500">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {availabilityOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(option)}
                        onChange={() => handleArrayChange("availability", option)}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.availability && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.availability}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Commitment *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    value={formData.timeCommitment}
                    onChange={(e) => handleInputChange("timeCommitment", e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.timeCommitment ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="">How much time can you commit?</option>
                    <option value="1-2 hours/week">1-2 hours per week</option>
                    <option value="3-5 hours/week">3-5 hours per week</option>
                    <option value="6-10 hours/week">6-10 hours per week</option>
                    <option value="10+ hours/week">More than 10 hours per week</option>
                    <option value="monthly">Monthly commitment</option>
                    <option value="project-based">Project-based only</option>
                  </select>
                </div>
                {errors.timeCommitment && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.timeCommitment}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Volunteer Experience
                </label>
                <textarea
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Tell us about any previous volunteer work or relevant experience"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                    errors.motivation ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Share your passion and what motivates you to volunteer with our organization"
                />
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.motivation}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Skills & Talents
                </label>
                <textarea
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="List any special skills, languages, or talents that might be helpful (e.g., graphic design, public speaking, medical background, etc.)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  References
                </label>
                <textarea
                  value={formData.references}
                  onChange={(e) => handleInputChange("references", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Please provide 2-3 references with their names, relationship, and contact information (optional but preferred)"
                />
              </div>
            </div>
          )}

          {/* Step 4: Agreements & Final Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Agreements & Consent</h3>
                  <p className="text-gray-600">Final steps to complete your application</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Application Summary</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <span className="ml-2 font-medium">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <span className="ml-2 font-medium">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="ml-2 font-medium">{formData.city}, {formData.state}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-600">Volunteer Areas:</span>
                      <span className="ml-2 font-medium">{formData.volunteerAreas.join(", ") || "None selected"}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-600">Time Commitment:</span>
                      <span className="ml-2 font-medium">{formData.timeCommitment}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`p-4 border rounded-lg ${errors.backgroundCheck ? "border-red-300 bg-red-50" : "border-gray-200"}`}>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.backgroundCheck}
                        onChange={(e) => handleInputChange("backgroundCheck", e.target.checked)}
                        className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Background Check Consent *</span>
                        <p className="text-gray-600 mt-1">
                          I consent to a background check being conducted as part of the volunteer screening process. 
                          I understand that this may include criminal history, reference checks, and verification of information provided.
                        </p>
                      </div>
                    </label>
                    {errors.backgroundCheck && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.backgroundCheck}
                      </p>
                    )}
                  </div>

                  <div className={`p-4 border rounded-lg ${errors.dataConsent ? "border-red-300 bg-red-50" : "border-gray-200"}`}>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.dataConsent}
                        onChange={(e) => handleInputChange("dataConsent", e.target.checked)}
                        className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Data Processing Consent *</span>
                        <p className="text-gray-600 mt-1">
                          I consent to the processing of my personal data for volunteer management purposes, including 
                          communication, scheduling, training, and program coordination. I understand I can withdraw 
                          this consent at any time by contacting the volunteer coordinator.
                        </p>
                      </div>
                    </label>
                    {errors.dataConsent && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.dataConsent}
                      </p>
                    )}
                  </div>

                  <div className={`p-4 border rounded-lg ${errors.commitment ? "border-red-300 bg-red-50" : "border-gray-200"}`}>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.commitment}
                        onChange={(e) => handleInputChange("commitment", e.target.checked)}
                        className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Commitment Acknowledgment *</span>
                        <p className="text-gray-600 mt-1">
                          I understand the time commitment I've indicated and agree to fulfill my volunteer 
                          responsibilities to the best of my ability. I will provide reasonable notice if I need 
                          to change my availability or step down from my volunteer role.
                        </p>
                      </div>
                    </label>
                    {errors.commitment && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.commitment}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <h5 className="font-medium text-blue-900 mb-1">What happens next?</h5>
                      <ul className="text-blue-700 space-y-1">
                        <li>• We'll review your application within 5-7 business days</li>
                        <li>• You'll receive a confirmation email with next steps</li>
                        <li>• If selected, we'll schedule an orientation session</li>
                        <li>• Background check will be initiated (if required for your role)</li>
                        <li>• You'll be matched with volunteer opportunities based on your preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <div>
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <span>← Previous</span>
                </button>
              )}
            </div>

            <div className="flex gap-3">
              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                >
                  <span>Next →</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2 min-w-[140px] justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}