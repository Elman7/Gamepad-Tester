interface AnalogSticksProps {
  axes: readonly number[]
}

export function AnalogSticks({ axes }: AnalogSticksProps) {
  const leftX = axes[0] || 0
  const leftY = axes[1] || 0
  const rightX = axes[2] || 0
  const rightY = axes[3] || 0

  const StickVisualizer = ({ x, y, label }: { x: number; y: number; label: string }) => {
    const threshold = 0.1
    const isActive = Math.abs(x) > threshold || Math.abs(y) > threshold

    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-32 w-32 rounded-full border-2 border-border bg-muted">
          <div
            className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all ${
              isActive
                ? "border-primary bg-primary shadow-lg shadow-primary/50"
                : "border-muted-foreground bg-muted-foreground/50"
            }`}
            style={{
              transform: `translate(calc(-50% + ${x * 48}px), calc(-50% + ${y * 48}px))`,
            }}
          />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" />
        </div>
        <div className="text-center">
          <div className="mb-1 text-sm font-semibold text-card-foreground">{label}</div>
          <div className="font-mono text-xs text-muted-foreground">
            X: {x.toFixed(2)} Y: {y.toFixed(2)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <StickVisualizer x={leftX} y={leftY} label="Left Stick" />
      <StickVisualizer x={rightX} y={rightY} label="Right Stick" />
    </div>
  )
}
