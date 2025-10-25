import emailjs from "@emailjs/browser"

  export const sendEmails = async (donationData: any) => {
    try {
      // Send email to admin
      await emailjs.send("service_yargote", "template_donation", {
        firstName: donationData.firstName,
        lastName: donationData.lastName,
        email: donationData.email,
        phone: donationData.phone || "Not provided",
        anonymous: donationData.anonymous ? "yes" : "no",
        donationType: donationData.donationType,
        project: donationData.project,
        amount: donationData.amount,
        timestamp: new Date().toLocaleString(),
        name: `${donationData.firstName} ${donationData.lastName}`,
      },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      // Send appreciation email to donor
      await emailjs.send("service_default", "template_donor", {
        firstName: donationData.firstName,
        amount: donationData.amount,
        project: donationData.project,
        year: new Date().getFullYear(),
        email: donationData.email,
      },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_SECOND as string
      )

      console.log("Emails sent successfully")
    } catch (error) {
      console.error("Error sending emails:", error)
    }
  }


    export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }