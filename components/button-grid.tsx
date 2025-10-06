interface ButtonGridProps {
  buttons: readonly GamepadButton[]
}

export function ButtonGrid({ buttons }: ButtonGridProps) {
  const buttonLabels = [
    "A",
    "B",
    "X",
    "Y",
    "LB",
    "RB",
    "LT",
    "RT",
    "Select",
    "Start",
    "L3",
    "R3",
    "Up",
    "Down",
    "Left",
    "Right",
    "Home",
  ]

  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
      {buttons.map((button, index) => {
        const isPressed = button.pressed
        const pressure = button.value
        const label = buttonLabels[index] || `B${index}`

        return (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-lg border-2 font-mono text-sm font-bold transition-all ${
                isPressed
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                  : "border-border bg-muted text-muted-foreground"
              }`}
              style={{
                opacity: isPressed ? 1 : 0.6,
              }}
            >
              {label}
            </div>
            {pressure > 0 && <div className="text-xs font-mono text-primary">{(pressure * 100).toFixed(0)}%</div>}
          </div>
        )
      })}
    </div>
  )
}
