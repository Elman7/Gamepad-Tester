import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

interface DPadProps {
  buttons: readonly GamepadButton[]
}

export function DPad({ buttons }: DPadProps) {
  const up = buttons[12]?.pressed || false
  const down = buttons[13]?.pressed || false
  const left = buttons[14]?.pressed || false
  const right = buttons[15]?.pressed || false

  const DPadButton = ({
    isPressed,
    icon: Icon,
    position,
  }: {
    isPressed: boolean
    icon: typeof ChevronUp
    position: string
  }) => (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-lg border-2 transition-all ${
        isPressed
          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
          : "border-border bg-muted text-muted-foreground"
      } ${position}`}
    >
      <Icon className="h-8 w-8" />
    </div>
  )

  return (
    <div className="flex justify-center">
      <div className="relative grid h-48 w-48 grid-cols-3 grid-rows-3 gap-1">
        <div className="col-start-2 row-start-1">
          <DPadButton isPressed={up} icon={ChevronUp} position="" />
        </div>
        <div className="col-start-1 row-start-2">
          <DPadButton isPressed={left} icon={ChevronLeft} position="" />
        </div>
        <div className="col-start-2 row-start-2 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-border bg-muted" />
        </div>
        <div className="col-start-3 row-start-2">
          <DPadButton isPressed={right} icon={ChevronRight} position="" />
        </div>
        <div className="col-start-2 row-start-3">
          <DPadButton isPressed={down} icon={ChevronDown} position="" />
        </div>
      </div>
    </div>
  )
}
