export default function DataFlowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-[flow_3s_linear_infinite]" />
      <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-[flow_4s_linear_infinite_1s]" />
      <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-[flow_5s_linear_infinite_2s]" />
    </div>
  );
}
