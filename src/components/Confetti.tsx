import { useEffect, useRef } from 'react';
import confetti, { Options as ConfettiOptions } from 'canvas-confetti';

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const Confetti = ({ trigger, originRef }: { trigger: number; originRef: React.RefObject<HTMLElement> }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const instance = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    confettiRef.current = instance;

    return () => {
      instance.reset();
      confettiRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (trigger === 0 || !confettiRef.current) return;

    const rect = originRef.current?.getBoundingClientRect();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    const fallbackWidth = window.innerWidth || 1;
    const fallbackHeight = window.innerHeight || 1;

    const centerX = rect && canvasRect
      ? (rect.left + rect.width / 2 - canvasRect.left) / (canvasRect.width || 1)
      : (rect ? (rect.left + rect.width / 2) / fallbackWidth : 0.5);

    const originY = rect && canvasRect
      ? (rect.top - canvasRect.top) / (canvasRect.height || 1)
      : (rect ? rect.top / fallbackHeight : 0.3);

    const timeouts: number[] = [];

    const fire = (
      delay: number,
      overrides: ConfettiOptions & { originOffsetX?: number; originOffsetY?: number } = {}
    ) => {
      const timeout = window.setTimeout(() => {
        const { originOffsetX = 0, originOffsetY = 0, ...rest } = overrides;

        confettiRef.current?.({
          particleCount: rest.particleCount ?? 80,
          spread: rest.spread ?? 100,
          startVelocity: rest.startVelocity ?? 60,
          gravity: rest.gravity ?? 0.9,
          ticks: rest.ticks ?? 260,
          scalar: rest.scalar ?? 1,
          drift: rest.drift ?? 0,
          decay: rest.decay ?? 0.94,
          shapes: rest.shapes ?? ['circle', 'square'],
          colors: rest.colors ?? COLORS,
          angle: rest.angle ?? 90,
          origin: {
            x: clamp(centerX + originOffsetX, 0, 1),
            y: clamp(originY + originOffsetY, 0, 0.9),
          },
        });
      }, delay);

      timeouts.push(timeout);
    };

    // Mimic the layered burst from vibekanban: opposing jets + central plume.
    fire(0, { particleCount: 70, spread: 60, startVelocity: 65, angle: 105, originOffsetX: -0.08 });
    fire(80, { particleCount: 70, spread: 60, startVelocity: 65, angle: 75, originOffsetX: 0.08 });
    fire(150, { particleCount: 90, spread: 130, startVelocity: 58, scalar: 1.15, originOffsetX: -0.02 });
    fire(220, { particleCount: 90, spread: 130, startVelocity: 58, scalar: 1.05, originOffsetX: 0.02 });
    fire(300, { particleCount: 60, spread: 150, startVelocity: 50, gravity: 1.05, drift: 0.5 });
    fire(360, { particleCount: 60, spread: 150, startVelocity: 50, gravity: 1.05, drift: -0.5 });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [originRef, trigger]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />;
};

export default Confetti;
