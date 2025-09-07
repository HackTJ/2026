"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#72a0d0" }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/dome.png"
          alt="dome"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex justify-end">
          <div className="text-right max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              HackTJ
              <span className="text-[#ADEBB3] ml-2">13.0</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">Spring 2026 @ Cvent HQ</p>
            <div className="flex gap-4 justify-end">
              <Button disabled={true} onClick={() => { alert("Register button clicked") }} className="bg-white text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg cursor-pointer">
                Register
              </Button>
              <Button className="bg-white text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg cursor-pointer">
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
