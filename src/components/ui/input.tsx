import * as React from 'react';
import { cn } from '@/lib/utils';

const fieldBase =
  'w-full border border-white/15 bg-surface px-4 text-sm text-white placeholder:text-white/40 transition-colors focus-visible:border-primary-300 focus-visible:outline-none aria-invalid:border-danger-300';

function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return <input className={cn(fieldBase, 'h-12', className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(fieldBase, 'min-h-28 resize-none py-3', className)}
      {...props}
    />
  );
}

export { Input, Textarea };
