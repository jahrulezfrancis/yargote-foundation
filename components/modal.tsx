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
    isOpen: boolean;
    onClose: () => void;
    donorName: string;
    amount: number;
    project: string;
    email: string;
    paymentReference?: string;
    paymentMethod: "bank-transfer" | "paystack" | "other";
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
            {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50" onClick={onClose} />}
            <DialogContent className="w-[calc(100%-2rem)] max-w-2xl max-h-[90vh] backdrop-blur-sm animate-fadeIn overflow-y-auto bg-white mx-auto">
                <DialogHeader>
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full">
                                <PartyPopper className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                            </div>
                        </div>
                    </div>
                    <DialogTitle className="text-lg sm:text-xl font-bold text-center text-gray-900 px-2">
                        Thank You, {donorName} for donating! 🎉
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 sm:space-y-6 py-4 -m-2">
                    {/* Success Message */}
                    <div className="text-center space-y-3 px-4">
                        <h3 className="text-sm sm:text-md font-bold text-emerald-800">
                            Your donation of ₦{amount.toLocaleString()} will be processed shortly!
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-sm text-center leading-relaxed max-w-lg mx-auto">
                            Your generosity is making a real difference in the lives of children and communities across Nigeria.
                            We are deeply grateful for your support.
                        </p>
                    </div>

                    {/* Email Confirmation Notice */}
                    {paymentMethod === "bank-transfer" ? (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex items-center gap-3 mx-4">
                            <WhatsappIcon className="w-5 h-5 flex-shrink-0 rounded-full text-blue-600 mt-0.5" />
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-blue-700 mt-1">
                                    You will be redirected to WhatsApp to share your receipt shortly...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex items-start gap-3 mx-4">
                            <Mail className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
                            <div className="min-w-0">
                                <p className="font-medium text-blue-900 text-sm sm:text-base">Confirmation Email Sent</p>
                                <p className="text-xs sm:text-sm text-blue-700 mt-1 break-words">
                                    A receipt and confirmation details have been sent to <strong>{email}</strong>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Social Share */}
                    <div className="space-y-3 px-4">
                        <h4 className="font-semibold text-center text-gray-900 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                            Inspire Others to Give
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                onClick={shareOnTwitter}
                                className="bg-gray-800 hover:bg-gray-900 text-xs sm:text-sm text-white w-full sm:w-auto"
                            >
                                Share on Twitter
                            </Button>
                            <Button
                                onClick={shareOnFacebook}
                                className="bg-gray-800 hover:bg-gray-900 text-xs sm:text-sm text-white w-full sm:w-auto"
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
