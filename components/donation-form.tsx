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
import { Heart, Shield, Target, Users, Copy, CheckCircle2, Building2, CreditCard } from "lucide-react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { toast } from "sonner"
import { CustomModal, ThankYouModal } from "./modal"
import { mockProjects } from "@/lib/mock-data"
import { PaystackButton } from "react-paystack"
import { formatCurrency, sendEmails } from "@/utils/helpers/payment"

const donationAmounts = [10000, 25000, 50000, 100000, 250000, 500000]


export default function DonationForm() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState(50000)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [selectedProject, setSelectedProject] = useState("general")
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isThankYouModal, setIsThankYouModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    anonymous: false,
  })
  const [copiedField, setCopiedField] = useState<null | string>(null)

  const bankDetails = {
    accountNumber: "1027185169",
    bankName: "UBA",
    accountName: "Yargote foundation for children, youth and women development"
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }


  const handlePaystackClose = () => {
    toast("Payment cancelled", {
      description: "You closed the payment window",
    })
  }

  const handleBankTransferSubmit = async () => {
    const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
    const project = mockProjects.find((p) => p.id === selectedProject)
    const donationTarget =
      selectedProject === "general" ? "general support" : project?.title || "selected project"

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all required fields (First Name, Last Name, and Email)")
      return
    }

    try {
      setIsProcessing(true)

      await new Promise((resolve) => setTimeout(resolve, 5000))

      setIsProcessing(false)

      setIsThankYouModal(true)

      // Build WhatsApp message
      const message = encodeURIComponent(
        `🌟 Donation Confirmation 🌟\n\n` +
        `Name: ${formData.anonymous ? "Anonymous Donor" : `${formData.firstName} ${formData.lastName}`}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Phone: ${formData.phone}\n` : "") +
        `Donation Type: ${donationType}\n` +
        `Amount: ₦${finalAmount.toLocaleString()}\n` +
        `Project: ${donationTarget}\n\n` +
        `Please confirm receipt.`
      )

      const whatsappNumber = "2348065361349"

      setTimeout(() => {
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
      }, 5000);

      setCustomAmount("")
      setIsCustom(false)
      setSelectedProject("general")
      setAmount(50000)
    } catch (error) {
      console.error("Error saving donation:", error)
      alert("There was an error submitting your donation. Please try again.")
    }
  }

  const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
  const selectedProjectData = mockProjects.find((p) => p.id === selectedProject)
  const activeProjects = mockProjects.filter((p) => p.status === "active" && p.acceptingDonations)


  const handleModalClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      anonymous: false,
    })
    setIsThankYouModal(false)
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

  const handlePaystackSuccess = async (reference: any) => {
    const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : amount
    const project = mockProjects.find((p) => p.id === selectedProject)
    const donationTarget =
      selectedProject === "general" ? "General Support" : project?.title || "Selected project"

    try {
      setIsProcessing(true)

      // Save to Firebase
      await addDoc(collection(db, "donations"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        anonymous: formData.anonymous,
        donationType,
        amount: finalAmount,
        project: donationTarget,
        paymentReference: reference.reference,
        paymentMethod: "paystack",
        timestamp: serverTimestamp(),
      })

      // Send emails
      await sendEmails({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        anonymous: formData.anonymous,
        donationType,
        amount: finalAmount,
        project: donationTarget,
      })

      toast("Thank you for your contribution", {
        description: `Your donation of ₦${finalAmount.toLocaleString()} was successful! A confirmation email has been sent to ${formData.email}.`,
        action: {
          label: "X",
          onClick: () => console.log("Closed"),
        },
      })

      setIsThankYouModal(true)

      setCustomAmount("")
      setIsCustom(false)
      setSelectedProject("general")
      setAmount(50000)
    } catch (error) {
      console.error("Error processing donation:", error)
      toast("Error", {
        description: "There was an error saving your donation. Please contact support.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  // Paystack configuration
  const paystackConfig = {
    reference: `YGF-${new Date().getTime()}`,
    email: formData.email,
    amount: finalAmount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
    metadata: {
      custom_fields: [
        {
          display_name: "Donor Name",
          variable_name: "donor_name",
          value: `${formData.firstName} ${formData.lastName}`,
        },
        {
          display_name: "Project",
          variable_name: "project",
          value: selectedProject === "general" ? "General Support" : selectedProjectData?.title || "Selected project",
        },
        {
          display_name: "Donation Type",
          variable_name: "donation_type",
          value: donationType,
        },
      ],
    },
  }

  const paystackComponentProps = {
    ...paystackConfig,
    text: `Pay with Card — ₦${finalAmount.toLocaleString()} ${donationType === "monthly" ? "/ month" : ""}`,
    onSuccess: (reference: any) => handlePaystackSuccess(reference),
    onClose: handlePaystackClose,
    disabled: !formData.firstName || !formData.lastName || !formData.email || isProcessing,
    className: "w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
  }

  const invalidForm = !formData.email || !formData.firstName || !formData.lastName || !formData.phone

  return (
    <div className="min-h-screen bg-gray-50 py-1 md:py-8 px-1 md:px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center border-b border-gray-100 py-8">
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
                  Choose Donation Destination
                </Label>
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-emerald-700 focus:ring-emerald-700 bg-white">
                    <SelectValue placeholder="Select a project or general support" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem
                      value="general"
                      className="py-3 hover:bg-emerald-50 focus:bg-emerald-50 data-[state=checked]:bg-emerald-100 data-[state=checked]:text-emerald-800"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">General Support</span>
                        <span className="text-sm text-gray-500">Allocated where it's needed most</span>
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
                            <span className="font-medium">{selectedProjectData.participantsServed} children currently supported</span>
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
                    <Label htmlFor="one-time" className="text-base font-medium cursor-pointer">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="monthly" id="monthly" className="border-gray-300 text-emerald-600" />
                    <Label htmlFor="monthly" className="text-base font-medium cursor-pointer">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                  Payment Method
                </Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "paystack" ? "border-emerald-600 bg-emerald-50" : "border-gray-300 hover:border-emerald-400"}`}>
                    <RadioGroupItem value="paystack" id="paystack" className="border-gray-300 text-emerald-600" />
                    <Label htmlFor="paystack" className="text-base font-medium cursor-pointer flex-1">
                      <div>
                        <div className="font-semibold">Card Payment</div>
                        <div className="text-sm text-gray-600">Pay instantly with card</div>
                      </div>
                    </Label>
                    <CreditCard className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === "bank-transfer" ? "border-emerald-600 bg-emerald-50" : "border-gray-300 hover:border-emerald-400"}`}>
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" className="border-gray-300 text-emerald-600" />
                    <Label htmlFor="bank-transfer" className="text-base font-medium cursor-pointer flex-1">
                      <div>
                        <div className="font-semibold">Bank Transfer</div>
                        <div className="text-sm text-gray-600">Transfer to our account</div>
                      </div>
                    </Label>
                    <Building2 className="w-5 h-5 text-gray-400" />
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900">
                  {donationType === "monthly" ? "Monthly Contribution" : "Donation Amount"}
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {donationAmounts.map((donationAmount) => (
                    <Button
                      key={donationAmount}
                      type="button"
                      variant={amount === donationAmount && !isCustom ? "default" : "outline"}
                      onClick={() => {
                        setAmount(donationAmount)
                        setIsCustom(false)
                      }}
                      className={`h-14 text-sm font-medium transition-all duration-200 ${amount === donationAmount && !isCustom
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
                  <Label htmlFor="custom" className="text-base font-medium cursor-pointer">Enter a custom amount</Label>
                </div>

                {isCustom && (
                  <div className="flex items-center space-x-3 mt-3">
                    <span className="text-2xl font-bold text-gray-700">₦</span>
                    <Input
                      type="number"
                      placeholder="Amount in NGN"
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
                  <div className="text-xl font-bold text-emerald-800 mb-2">
                    ₦{finalAmount.toLocaleString()} {donationType === "monthly" ? " / month" : ""}
                  </div>
                  <p className="text-emerald-700 text-sm leading-relaxed">
                    {selectedProject === "general"
                      ? `This gift can provide ${getImpactMessage(finalAmount)} and will be used where the need is greatest.`
                      : `Directed to ${selectedProjectData?.title || "this project"}, your gift can ${getImpactMessage(finalAmount)}.`}
                  </p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <Label className="text-lg font-semibold text-gray-900">Your Details</Label>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="anonymous"
                    checked={formData.anonymous}
                    onCheckedChange={(checked) => setFormData({ ...formData, anonymous: checked === true })}
                    className="border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <Label htmlFor="anonymous" className="text-sm font-medium cursor-pointer">Keep my name private</Label>
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <Shield className="w-5 h-5 mt-0.5 text-gray-500" />
                <div>
                  <p className="font-medium mb-1">Secure & Trusted</p>
                  <p>All card payments are securely encrypted and processed by Paystack, a trusted payment provider. We never store your card information.</p>
                </div>
              </div>

              {/* Bank Transfer Details */}
              {paymentMethod === "bank-transfer" && (
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-lg font-bold text-emerald-900">Bank Transfer Instructions</h3>
                  </div>

                  <div className="space-y-4 bg-white p-5 rounded-lg border border-emerald-200">
                    <div className="space-y-1">
                      <Label className="text-xs font-medium text-gray-600">Bank</Label>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="font-semibold text-gray-900">{bankDetails.bankName}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.bankName, "bank")}
                          className="h-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          {copiedField === "bank" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs font-medium text-gray-600">Account Number</Label>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="font-semibold text-lg text-gray-900">{bankDetails.accountNumber}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.accountNumber, "account")}
                          className="h-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          {copiedField === "account" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs font-medium text-gray-600">Account Name</Label>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="font-semibold text-sm text-gray-900">{bankDetails.accountName}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(bankDetails.accountName, "name")}
                          className="h-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          {copiedField === "name" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    <p className="font-medium">Please transfer ₦{finalAmount.toLocaleString()} to the account above.</p>
                    <p className="text-xs mt-1 text-emerald-700">Once your transfer is complete, click "Confirm Donation" and send a copy of your payment confirmation so we can acknowledge receipt.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {paymentMethod === "paystack" ? (
                <div className="space-y-3">
                  {(!formData.firstName || !formData.lastName || !formData.email) && (
                    <p className="text-sm text-red-600 text-center">
                      Please fill in all required fields (First Name, Last Name, and Email) to proceed with payment
                    </p>
                  )}
                  <PaystackButton {...paystackComponentProps} />
                </div>
              ) : (
                <>
                  {isProcessing ? (
                    <Button
                      disabled
                      className="w-full h-14 text-lg bg-gray-400"
                    >
                      Processing...
                    </Button>
                  ) : (
                    <CustomModal
                      actionText="Confirm"
                      cancelText="Cancel"
                      disabled={!formData.email || !formData.firstName || !formData.lastName || !formData.phone}
                      description={`You are about to donate ₦${finalAmount.toLocaleString()} ${donationType === "monthly" ? "per month to" : "to"} ${selectedProject === "general" ? "General Support" : selectedProjectData?.title} via bank transfer. Do you want to proceed?`}
                      onAction={handleBankTransferSubmit}
                      title="Confirm Donation"
                      buttonTriggerText={invalidForm ? "Please fill in the form to donate" : isProcessing ? "Processing" : `Confirm Donation — ₦${finalAmount.toLocaleString()} ${donationType === "monthly" ? "/ month" : ""}`}
                    />
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <ThankYouModal
        project={selectedProject}
        isOpen={isThankYouModal}
        onClose={handleModalClose}
        amount={amount}
        donorName={formData.firstName + " " + formData.lastName}
        email={formData.email} paymentMethod={paymentMethod}
      />

    </div>
  )
}