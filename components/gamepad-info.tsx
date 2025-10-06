import { Card } from "@/components/ui/card"
import { Gamepad } from "lucide-react"

interface GamepadInfoProps {
  gamepad: Gamepad
}

export function GamepadInfo({ gamepad }: GamepadInfoProps) {
  return (
    <Card className="bg-card p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <Gamepad className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="mb-1 text-xl font-semibold text-card-foreground">{gamepad.id}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>Index: {gamepad.index}</span>
            <span>Buttons: {gamepad.buttons.length}</span>
            <span>Axes: {gamepad.axes.length}</span>
            <span className="flex items-center gap-1">
              Status: <span className="text-primary font-medium">Connected</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
