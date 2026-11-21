"use client";

import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/schemas/contact";
import { sendContactMessage } from "@/lib/api/contact";
import type { SubmitStatus } from "@/types";

export function useContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const [status, setStatus] = useState<SubmitStatus>("success");
  const [modalOpen, setModalOpen] = useState(false);
  const lastValues = useRef<ContactFormValues | null>(null);

  const send = useCallback(
    async (values: ContactFormValues) => {
      lastValues.current = values;
      try {
        await sendContactMessage(values);
        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
      } finally {
        setModalOpen(true);
      }
    },
    [form],
  );

  const onSubmit = form.handleSubmit(send);

  const retry = useCallback(async () => {
    setModalOpen(false);
    if (lastValues.current) await send(lastValues.current);
  }, [send]);

  const handleModalAction = useCallback(() => {
    if (status === "error") {
      void retry();
      return;
    }
    setModalOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [status, retry]);

  return {
    form,
    onSubmit,
    status,
    modalOpen,
    setModalOpen,
    handleModalAction,
  };
}
