import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PartyPopper, Mail, Share2 } from "lucide-react"
import { WhatsappIcon } from "next-share"


interface CustomModalProps {
    title: string;
    description: string;
    buttonTriggerText: string;
    actionText: string;
    cancelText: string;
    onAction: () => void;
    onCancel?: () => void;
    disabled?: boolean
}

export function CustomModal({ title, buttonTriggerText, description, disabled, actionText, onAction, cancelText }: CustomModalProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button disabled={disabled} className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-md md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl" variant="outline">{buttonTriggerText}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="border text-gray-600 border-gray-300 hover:bg-accent-foreground hover:text-gray-600">{cancelText}</AlertDialogCancel>
                    <AlertDialogAction onClick={onAction}>
                        {actionText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}



interface ThankYouModalProps {
    isOpen: boolean
    onClose: () => void
    donorName: string
    amount: number
    project: string
    email: string
    paymentReference?: string
    paymentMethod: string
}

export function ThankYouModal({
    isOpen,
    onClose,
    donorName,
    amount,
    project,
    email,
    paymentReference,
    paymentMethod
}: ThankYouModalProps) {

    const shareOnTwitter = () => {
        const text = encodeURIComponent(
            `I just donated ₦${amount.toLocaleString()} to support ${project} through Yargote Foundation! Join me in making a difference. 💚`
        )
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
    }

    const shareOnFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
            "_blank"
        )
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl min-h-[100vh] bg-white">
                <DialogHeader>
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full">
                                <PartyPopper className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </div>
                    <DialogTitle className="text-3xl font-bold text-center text-gray-900">
                        Thank You, {donorName}! 🎉
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4 -mt-12">
                    {/* Success Message */}
                    <div className="text-center space-y-3">
                        {/* <div className="flex justify-center">
                            <CheckCircle2 className="w-16 h-16 text-emerald-600" />
                        </div> */}
                        <h3 className="text-2xl font-bold text-emerald-800">
                            Your donation of ₦{amount.toLocaleString()} was successful!
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed max-w-lg mx-auto">
                            Your generosity is making a real difference in the lives of children and communities across Nigeria.
                            We are deeply grateful for your support.
                        </p>
                    </div>

                    {/* Donation Details Card */}
                    {/* <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-xl p-6">
                        <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-emerald-600" fill="currentColor" />
                            Donation Details
                        </h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                                <span className="text-gray-600">Amount</span>
                                <span className="font-bold text-xl text-emerald-700">₦{amount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                                <span className="text-gray-600">Project</span>
                                <span className="font-semibold text-gray-900">{project}</span>
                            </div>
                            {paymentReference && (
                                <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                                    <span className="text-gray-600">Reference</span>
                                    <span className="font-mono text-sm text-gray-700">{paymentReference}</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600">Email</span>
                                <span className="text-gray-700">{email}</span>
                            </div>
                        </div>
                    </div> */}

                    {/* Email Confirmation Notice */}
                    {paymentMethod === "bank-transfer" ?

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                        <WhatsappIcon  className="w-5 h-5 rounded-full text-blue-600 mt-0.5" />
                        <div>
                            <p className="font-medium text-blue-900">WhatsApp Redirection</p>
                            <p className="text-sm text-blue-700 mt-1">
                                Your receipt will be shared via WhatsApp. You'll be redirected in a few seconds...
                            </p>
                        </div>
                    </div>
                    :
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                            <p className="font-medium text-blue-900">Confirmation Email Sent</p>
                            <p className="text-sm text-blue-700 mt-1">
                                A receipt and confirmation details have been sent to <strong>{email}</strong>
                            </p>
                        </div>
                    </div>
                    
                }

                    {/* Social Share */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-center text-gray-900 flex items-center justify-center gap-2">
                            <Share2 className="w-5 h-5 text-emerald-600" />
                            Inspire Others to Give
                        </h4>
                        <div className="flex gap-3 justify-center">
                            <Button
                                onClick={shareOnTwitter}
                                className="bg-gray-800 hover:bg-gray-900 text-xs text-white"
                            >
                                Share on Twitter
                            </Button>
                            <Button
                                onClick={shareOnFacebook}
                                className="bg-gray-800 hover:bg-gray-900 text-xs text-white"
                            >
                                Share on Facebook
                            </Button>
                        </div>
                    </div>


                </div>
            </DialogContent>
        </Dialog>
    )
}
