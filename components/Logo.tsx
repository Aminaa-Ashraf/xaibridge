type Props = {
  className?: string;
};

export default function Logo({ className = "h-12 w-[188px]" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/xaibridge-logo.png"
      alt="Xaibridge — Where Evolution Meets Innovation"
      className={`object-contain object-left ${className}`}
    />
  );
}
