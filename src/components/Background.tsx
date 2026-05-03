export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(120% 80% at 50% -10%, #221C16 0%, #14110D 60%)",
      }}
    />
  );
}
