import React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, CreditCard, Shield, Target, Users } from "lucide-react"

// Mock data for projects
const mockProjects = [
  {
    id: "education",
    title: "Education Support Program",
    category: "Education",
    shortDescription: "Providing school supplies, books, and educational resources to underprivileged boys",
    raisedAmount: 2800000,
    targetAmount: 5000000,
    participantsServed: 150,
    status: "active",
    acceptingDonations: true
  },
  {
    id: "mentorship",
    title: "Youth Mentorship Initiative",
    category: "Mentorship",
    shortDescription: "One-on-one mentoring sessions to guide young boys through life challenges",
    raisedAmount: 1200000,
    targetAmount: 3000000,
    participantsServed: 80,
    status: "active",
    acceptingDonations: true
  },
  {
    id: "skills",
    title: "Life Skills Development",
    category: "Skills Training",
    shortDescription: "Teaching practical life skills including financial literacy and career guidance",
    raisedAmount: 950000,
    targetAmount: 2500000,
    participantsServed: 120,
    status: "active",
    acceptingDonations: true
  }
]

const donationAmounts = [10000, 25000, 50000, 100000, 250000, 500000]

export default function DonationForm() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState(50000)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [selectedProject, setSelectedProject] = useState("general")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    anonymous: false,
  })

  const handleSubmit = () => {
    const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
    const project = mockProjects.find((p) => p.id === selectedProject)
    const donationTarget = selectedProject === "general" ? "general support" : project?.title || "selected project"

    alert(`Thank you for your ${donationType} donation of ₦${finalAmount.toLocaleString()} to ${donationTarget}!`)
  }

  const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
  const selectedProjectData = mockProjects.find((p) => p.id === selectedProject)
  const activeProjects = mockProjects.filter((p) => p.status === "active" && p.acceptingDonations)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100)
  }

  const getImpactMessage = (amount: number) => {
    if (amount >= 500000) {
      return "comprehensive mentorship support for 10 boys for a month"
    } else if (amount >= 250000) {
      return "educational materials and resources for 15 boys"
    } else if (amount >= 100000) {
      return "life skills workshop for 12 boys"
    } else if (amount >= 50000) {
      return "mentorship session for 6 boys"
    } else if (amount >= 25000) {
      return "school supplies for 4 boys"
    } else {
      return "basic educational support for 2 boys"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-1 md:py-8 px-1 md:px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center border-b border-gray-100 pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-emerald-50 rounded-full">
                <Heart className="w-8 h-8 text-emerald-600" fill="currentColor" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Make a Donation
            </CardTitle>
            <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
              Your support transforms lives and builds stronger communities across Nigeria
            </p>
          </CardHeader>

          <CardContent className="md:p-8">
            <div className="space-y-8">
              {/* Donation Target */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Donation Target
                </Label>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-emerald-700 focus:ring-emerald-700 bg-white">
                    <SelectValue placeholder="Choose where to direct your donation" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem
                      value="general"
                      className="py-3 hover:bg-emerald-50 focus:bg-emerald-50 data-[state=checked]:bg-emerald-100 data-[state=checked]:text-emerald-800"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">General Support</span>
                        <span className="text-sm text-gray-500">Where most needed</span>
                      </div>
                    </SelectItem>
                    {activeProjects.map((project) => (
                      <SelectItem
                        key={project.id}
                        value={project.id}
                        className="py-3 hover:bg-emerald-50 focus:bg-emerald-50 data-[state=checked]:bg-emerald-100 data-[state=checked]:text-emerald-800"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold text-start text-gray-900">{project.title}</span>
                          <span className="text-sm text-start text-emerald-700">{project.category}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedProjectData && (
                  <Card className="bg-gray-50 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 mb-1">{selectedProjectData.title}</h4>
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
                            {selectedProjectData.category}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{selectedProjectData.shortDescription}</p>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Funding Progress</span>
                          <span className="font-bold text-lg text-gray-900">
                            {formatCurrency(selectedProjectData.raisedAmount)} of{" "}
                            {formatCurrency(selectedProjectData.targetAmount)}
                          </span>
                        </div>

                        <Progress
                          value={getProgressPercentage(selectedProjectData.raisedAmount, selectedProjectData.targetAmount)}
                          className="h-3 bg-gray-200"
                          style={{ ["--progress-foreground" as any]: "rgb(5 150 105)" }}
                        />

                        <div className="flex justify-between items-center text-sm">
                          <span className="text-emerald-600 font-semibold">
                            {getProgressPercentage(
                              selectedProjectData.raisedAmount,
                              selectedProjectData.targetAmount,
                            ).toFixed(0)}% funded
                          </span>
                          <span className="text-gray-600">
                            {formatCurrency(selectedProjectData.targetAmount - selectedProjectData.raisedAmount)} remaining
                          </span>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-emerald-700">
                            <Users className="w-5 h-5" />
                            <span className="font-medium">{selectedProjectData.participantsServed} boys currently supported</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Donation Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900">Donation Frequency</Label>
                <RadioGroup
                  value={donationType}
                  onValueChange={setDonationType}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="one-time" id="one-time" className="border-gray-300 text-emerald-600" />
                    <Label htmlFor="one-time" className="text-base font-medium cursor-pointer">One-time donation</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="monthly" id="monthly" className="border-gray-300 text-emerald-600" />
                    <Label htmlFor="monthly" className="text-base font-medium cursor-pointer">Monthly donation</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900">
                  {donationType === "monthly" ? "Monthly Amount" : "Donation Amount"}
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {donationAmounts.map((donationAmount) => (
                    <Button
                      key={donationAmount}
                      type="button"
                      variant={amount === donationAmount && !isCustom ? "default" : "outline"}
                      onClick={() => {
                        setAmount(donationAmount)
                        setIsCustom(false)
                      }}
                      className={`h-14 text-base font-medium transition-all duration-200 ${amount === donationAmount && !isCustom
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600"
                        : "border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-gray-700 hover:cursor-pointer text-gray-700"
                        }`}
                    >
                      ₦{donationAmount.toLocaleString()}
                    </Button>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <Checkbox
                    id="custom"
                    checked={isCustom}
                    onCheckedChange={(checked) => setIsCustom(checked === true)}
                    className="border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <Label htmlFor="custom" className="text-base font-medium cursor-pointer">Custom amount</Label>
                </div>

                {isCustom && (
                  <div className="flex items-center space-x-3 mt-3">
                    <span className="text-2xl font-bold text-gray-700">₦</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="text-lg h-12 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                    />
                  </div>
                )}
              </div>

              {/* Impact Message */}
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-800 mb-2">
                    ₦{finalAmount.toLocaleString()} {donationType === "monthly" ? "per month" : ""}
                  </div>
                  <p className="text-emerald-700 leading-relaxed">
                    {selectedProject === "general"
                      ? `can provide ${getImpactMessage(finalAmount)}`
                      : `towards ${selectedProjectData?.title || "this project"} can help provide ${getImpactMessage(finalAmount)}`}
                  </p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <Label className="text-lg font-semibold text-gray-900">Personal Information</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="h-11 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="h-11 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="anonymous"
                    checked={formData.anonymous}
                    onCheckedChange={(checked) => setFormData({ ...formData, anonymous: checked === true })}
                    className="border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <Label htmlFor="anonymous" className="text-sm font-medium cursor-pointer">Make this donation anonymous</Label>
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <Shield className="w-5 h-5 mt-0.5 text-gray-500" />
                <div>
                  <p className="font-medium mb-1">Secure & Encrypted</p>
                  <p>Your donation is protected with bank-level security. We never store your payment information.</p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="button"
                size="lg"
                onClick={handleSubmit}
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-md md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate ₦{finalAmount.toLocaleString()} {donationType === "monthly" ? "Monthly" : "Now"}
                {selectedProject !== "general" && " to Project"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}