import { Check, X, type LucideIcon } from "lucide-react";
import type { SubmitStatus } from "@/types";

type StatusModalConfig = {
  title: string;
  description: string;
  action: string;
  icon: LucideIcon;
  glowClass: string;
  iconBgClass: string;
};

/** SSOT for the success / failure modal (desktop + mobile share the same copy). */
export const STATUS_MODAL: Record<SubmitStatus, StatusModalConfig> = {
  success: {
    title: "Thanks for Reaching Out!",
    description: "I've received your message and will get back to you shortly.",
    action: "Back to Home",
    icon: Check,
    glowClass: "modal-glow-success",
    iconBgClass: "bg-primary-400",
  },
  error: {
    title: "Message Not Sent",
    description: "Something broke along the way. Let's try resending it.",
    action: "Try Again",
    icon: X,
    glowClass: "modal-glow-error",
    iconBgClass: "bg-danger-300",
  },
};
