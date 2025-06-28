"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Document & Plans, Unified. Welcome to <span className="underline">Setpotro</span></h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">Setpotro is the connected workspace where <br /> better, faster work happens</h3>
        <Button className="cursor-pointer">
          Get Started
          <ArrowRight/>
        </Button>
    </div>
  )
}
export default heading