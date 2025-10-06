"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { GamepadDisplay } from "@/components/gamepad-display"
import { GamepadInfo } from "@/components/gamepad-info"
import { Gamepad2 } from "lucide-react"

export default function GamepadTester() {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    let animationFrameId: number

    const updateGamepad = () => {
      const gamepads = navigator.getGamepads()
      const connectedGamepad = gamepads[0] || gamepads[1] || gamepads[2] || gamepads[3]

      if (connectedGamepad) {
        setGamepad(connectedGamepad)
        setIsConnected(true)
      } else {
        setIsConnected(false)
      }

      animationFrameId = requestAnimationFrame(updateGamepad)
    }

    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log("[v0] Gamepad connected:", e.gamepad.id)
      setGamepad(e.gamepad)
      setIsConnected(true)
    }

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log("[v0] Gamepad disconnected:", e.gamepad.id)
      setGamepad(null)
      setIsConnected(false)
    }

    window.addEventListener("gamepadconnected", handleGamepadConnected)
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected)

    animationFrameId = requestAnimationFrame(updateGamepad)

    return () => {
      window.removeEventListener("gamepadconnected", handleGamepadConnected)
      window.removeEventListener("gamepaddisconnected", handleGamepadDisconnected)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Gamepad2 className="h-10 w-10 text-primary" />
            <h1 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">Gamepad Tester</h1>
          </div>
          <p className="text-balance text-lg text-muted-foreground">
            Connect your controller and test all buttons, sticks, and triggers in real-time
          </p>
        </header>

        {!isConnected && (
          <Card className="mb-8 border-2 border-dashed border-border bg-card/50 p-8 text-center">
            <Gamepad2 className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold text-card-foreground">No Gamepad Detected</h2>
            <p className="text-muted-foreground">Connect a gamepad and press any button to begin testing</p>
          </Card>
        )}

        {isConnected && gamepad && (
          <div className="space-y-6">
            <GamepadInfo gamepad={gamepad} />
            <GamepadDisplay gamepad={gamepad} />
          </div>
        )}
      </div>
    </main>
  )
}
