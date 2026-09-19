interface LogoProps {
  showText?: boolean;
}

export default function Logo({ showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-zinc-950 text-sm font-semibold text-white">
        A
      </div>

      {showText && (
        <span className="text-[15px] font-semibold tracking-[-0.02em] text-zinc-950">
          Assess Hiring
        </span>
      )}
    </div>
  );
}