import { Card } from "@/components/ui/card"
import { ButtonGrid } from "@/components/button-grid"
import { AnalogSticks } from "@/components/analog-sticks"
import { Triggers } from "@/components/triggers"
import { DPad } from "@/components/dpad"

interface GamepadDisplayProps {
  gamepad: Gamepad
}

export function GamepadDisplay({ gamepad }: GamepadDisplayProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">Buttons</h3>
        <ButtonGrid buttons={gamepad.buttons} />
      </Card>

      <Card className="bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">Analog Sticks</h3>
        <AnalogSticks axes={gamepad.axes} />
      </Card>

      <Card className="bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">Triggers</h3>
        <Triggers buttons={gamepad.buttons} />
      </Card>

      <Card className="bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold text-card-foreground">D-Pad</h3>
        <DPad buttons={gamepad.buttons} />
      </Card>
    </div>
  )
}
