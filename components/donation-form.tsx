"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, CreditCard, Shield, Target } from "lucide-react"
import { mockProjects } from "@/lib/mock-data"
import { useSearchParams } from "next/navigation"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export function DonationForm() {
  const searchParams = useSearchParams()
  const projectId = searchParams?.get("project")

  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [amount, setAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isCustom, setIsCustom] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string>(projectId || "general")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    anonymous: false,
  })

  useEffect(() => {
    if (projectId) {
      setSelectedProject(projectId)
    }
  }, [projectId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
    const project = mockProjects.find((p) => p.id === selectedProject)
    const donationTarget = selectedProject === "general" ? "general support" : project?.title || "selected project"

    alert(`Thank you for your ${donationType} donation of $${finalAmount} to ${donationTarget}!`)
  }

  const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
  const selectedProjectData = mockProjects.find((p) => p.id === selectedProject)
  const activeProjects = mockProjects.filter((p) => p.status === "active" && p.acceptingDonations)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Heart className="w-6 h-6 text-accent" />
          Make a Donation
        </CardTitle>
        <p className="text-muted-foreground">Your support transforms lives and builds stronger communities</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Donation Target</Label>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger>
                <SelectValue placeholder="Choose where to direct your donation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Support - Where Most Needed</SelectItem>
                {activeProjects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedProjectData && (
              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{selectedProjectData.title}</h4>
                    <Badge variant="secondary">{selectedProjectData.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedProjectData.shortDescription}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Funding Progress</span>
                      <span className="font-semibold">
                        {formatCurrency(selectedProjectData.raisedAmount)} of{" "}
                        {formatCurrency(selectedProjectData.targetAmount)}
                      </span>
                    </div>
                    <Progress
                      value={getProgressPercentage(selectedProjectData.raisedAmount, selectedProjectData.targetAmount)}
                      className="h-2"
                    />
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>
                        {getProgressPercentage(
                          selectedProjectData.raisedAmount,
                          selectedProjectData.targetAmount,
                        ).toFixed(0)}
                        % funded
                      </span>
                      <span>
                        {formatCurrency(selectedProjectData.targetAmount - selectedProjectData.raisedAmount)} remaining
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4 text-accent" />
                      <span>{selectedProjectData.participantsServed} boys served</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Donation Type */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Donation Type</Label>
            <RadioGroup
              value={donationType}
              onValueChange={(value) => setDonationType(value as "one-time" | "monthly")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time donation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly donation</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Amount Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              {donationType === "monthly" ? "Monthly Amount" : "Donation Amount"}
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {donationAmounts.map((donationAmount) => (
                <Button
                  key={donationAmount}
                  type="button"
                  variant={amount === donationAmount && !isCustom ? "default" : "outline"}
                  onClick={() => {
                    setAmount(donationAmount)
                    setIsCustom(false)
                  }}
                  className="h-12"
                >
                  ${donationAmount}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="custom"
                checked={isCustom}
                onCheckedChange={(checked) => {
                  setIsCustom(checked as boolean)
                  if (!checked) setCustomAmount("")
                }}
              />
              <Label htmlFor="custom">Custom amount</Label>
            </div>
            {isCustom && (
              <div className="flex items-center space-x-2">
                <span className="text-2xl">$</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="text-lg"
                />
              </div>
            )}
          </div>

          <div className="bg-accent/10 p-4 rounded-lg">
            <p className="text-sm text-center">
              <strong>${finalAmount}</strong> {donationType === "monthly" ? "per month" : ""}
              {selectedProject === "general"
                ? " can provide "
                : ` towards ${selectedProjectData?.title || "this project"} can help `}
              {finalAmount >= 500
                ? "comprehensive mentorship support for 5 boys for a month"
                : finalAmount >= 250
                  ? "educational materials and resources for 10 boys"
                  : finalAmount >= 100
                    ? "life skills workshop for 8 boys"
                    : finalAmount >= 50
                      ? "mentorship session for 4 boys"
                      : "school supplies for 2 boys"}
            </p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Personal Information</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="border-2 focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="border-2 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-2 focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={formData.anonymous}
                onCheckedChange={(checked) => setFormData({ ...formData, anonymous: checked as boolean })}
              />
              <Label htmlFor="anonymous">Make this donation anonymous</Label>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <Shield className="w-4 h-4" />
            <span>Your donation is secure and encrypted. We never store your payment information.</span>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
            <CreditCard className="w-4 h-4 mr-2" />
            Donate ${finalAmount} {donationType === "monthly" ? "Monthly" : "Now"}
            {selectedProject !== "general" && " to Project"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
