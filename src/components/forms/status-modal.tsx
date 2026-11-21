"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { STATUS_MODAL } from "@/constants/modal";
import { cn } from "@/lib/utils";
import type { SubmitStatus } from "@/types";

type StatusModalProps = {
  open: boolean;
  status: SubmitStatus;
  onOpenChange: (open: boolean) => void;
  onAction: () => void;
};

/**
 * Success / failure modal.
 * Mobile: 100% width minus 16px gutters (361px on a 393 viewport).
 * Desktop: fixed 518px.
 */
export function StatusModal({ open, status, onOpenChange, onAction }: StatusModalProps) {
  const { title, description, action, icon: Icon, glowClass, iconBgClass } = STATUS_MODAL[status];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] overflow-hidden border border-white/10 bg-black sm:w-[518px]">
        {/* header artwork */}
        <div className="relative grid h-[236px] place-items-center overflow-hidden lg:h-[260px]">
          <div className={cn("absolute inset-0", glowClass)} aria-hidden />
          <div
            className="bg-grid-sm absolute inset-0 mask-[radial-gradient(70%_80%_at_50%_0%,black,transparent)]"
            aria-hidden
          />
          {[170, 220, 270].map((size) => (
            <span
              key={size}
              aria-hidden
              style={{ width: size, height: size }}
              className="absolute rounded-full border border-white/10"
            />
          ))}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className={cn(
              "relative grid size-[84px] place-items-center rounded-full text-white lg:size-[104px]",
              iconBgClass,
            )}
          >
            <Icon className="size-10 lg:size-12" strokeWidth={3} aria-hidden />
          </motion.div>
        </div>

        {/* copy + action */}
        <div className="px-4 pt-2 pb-8 text-center sm:px-8">
          <DialogTitle className="text-xl font-bold lg:text-2xl">{title}</DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-white/80 sm:max-w-none">
            {description}
          </DialogDescription>
          <Button shape="pill" className="mt-8 h-12 w-full lg:h-12" onClick={onAction}>
            {action}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
