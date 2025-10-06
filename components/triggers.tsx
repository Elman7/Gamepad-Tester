interface TriggersProps {
  buttons: readonly GamepadButton[]
}

export function Triggers({ buttons }: TriggersProps) {
  const leftTrigger = buttons[6]?.value || 0
  const rightTrigger = buttons[7]?.value || 0

  const TriggerBar = ({ value, label }: { value: number; label: string }) => {
    const isActive = value > 0.1

    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-card-foreground">{label}</span>
          <span className={`font-mono text-sm ${isActive ? "text-primary" : "text-muted-foreground"}`}>
            {(value * 100).toFixed(0)}%
          </span>
        </div>
        <div className="h-8 w-full overflow-hidden rounded-lg border-2 border-border bg-muted">
          <div
            className={`h-full transition-all ${isActive ? "bg-primary shadow-inner" : "bg-muted-foreground/30"}`}
            style={{ width: `${value * 100}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <TriggerBar value={leftTrigger} label="Left Trigger (LT)" />
      <TriggerBar value={rightTrigger} label="Right Trigger (RT)" />
    </div>
  )
}
