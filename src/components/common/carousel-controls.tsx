import { Button } from '@/components/ui/button';

type CarouselControlsProps = {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

const controlClass =
  'h-[34px] min-w-[76px] border border-white/20 bg-transparent px-4 text-xs text-white hover:bg-white/10 disabled:border-white/10 disabled:text-white/25 disabled:opacity-100';

export function CarouselControls({
  canPrev,
  canNext,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <div className='flex items-center gap-3'>
      <Button
        variant='ghost'
        size='sm'
        onClick={onPrev}
        disabled={!canPrev}
        className={controlClass}
      >
        Prev
      </Button>
      <Button
        variant='ghost'
        size='sm'
        onClick={onNext}
        disabled={!canNext}
        className={controlClass}
      >
        Next
      </Button>
    </div>
  );
}

type CarouselProgressProps = { progress: number; ratio: number };

export function CarouselProgress({ progress, ratio }: CarouselProgressProps) {
  const width = Math.max(ratio, 0.15) * 100;
  const left = progress * (100 - width);
  return (
    <div className='relative h-px w-full bg-white/15' aria-hidden>
      <div
        className='absolute -top-px h-0.75 bg-white transition-[left] duration-150'
        style={{ width: `${width}%`, left: `${left}%` }}
      />
    </div>
  );
}
