// components/gift-section.tsx
import { Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function GiftSection() {
  return (
    <section id="gifts" className="pt-16 pb-10  bg-background text-center px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <Gift className="h-10 w-10 text-[#fb4018]" />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">Gifts & Blessings</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Your presence on our special day is the greatest gift we could ever ask for.
          <br />
          However, if you would like to bless us further, we would deeply appreciate
          a contribution towards our future together — whether it is our first home,
          adventures as a married couple, or simply building our life side by side.
        </p>
        <Card className="bg-muted/50 shadow-sm rounded-2xl">
          <CardContent className="py-6">
            <p className="font-medium text-lg mb-1 text-foreground">Wedding Gift Account</p>
            <p className="text-muted-foreground">Bank: Capitec</p>
            <p className="text-muted-foreground">Account Name: E Hoffman</p>
            <p className="text-muted-foreground">Account Number: 2451461108</p>
            <p className="text-muted-foreground">Reference: “Your Name”</p>
          </CardContent>
        </Card>
        <p className="mt-6 text-sm text-muted-foreground italic">
          Thank you for helping us start this new chapter — your kindness means the world to us.
        </p>
      </div>
    </section>
  )
}
