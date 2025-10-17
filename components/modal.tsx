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


interface CustomModalProps {
    title: string;
    description: string;
    buttonTriggerText: string;
    actionText: string;
    cancelText: string;
    onAction: () => void;
    onCancel?: () => void;
}

export function CustomModal({ title, buttonTriggerText, description, actionText, onAction, cancelText }: CustomModalProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-md md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl" variant="outline">{buttonTriggerText}</Button>
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
