'use client';

import { Loader2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StatusModal } from '@/components/forms/status-modal';
import { CONTACT_CONTENT } from '@/constants/content';
import { useContactForm } from '@/hooks/use-contact-form';
import type { ContactFormValues } from '@/schemas/contact';

type FieldProps = {
  name: keyof ContactFormValues;
  error?: string;
  children: React.ReactNode;
};

function Field({ name, error, children }: FieldProps) {
  const { label } = CONTACT_CONTENT.fields[name];
  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error && (
        <p role='alert' className='text-xs text-danger-300'>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const { form, onSubmit, status, modalOpen, setModalOpen, handleModalAction } =
    useContactForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;
  const { fields } = CONTACT_CONTENT;

  return (
    <>
      <form onSubmit={onSubmit} noValidate className='mt-8 flex flex-col gap-5'>
        <Field name='name' error={errors.name?.message}>
          <Input
            id='name'
            autoComplete='name'
            placeholder={fields.name.placeholder}
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>

        <Field name='email' error={errors.email?.message}>
          <Input
            id='email'
            type='email'
            autoComplete='email'
            placeholder={fields.email.placeholder}
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </Field>

        <Field name='message' error={errors.message?.message}>
          <Textarea
            id='message'
            rows={4}
            placeholder={fields.message.placeholder}
            aria-invalid={!!errors.message}
            {...register('message')}
          />
        </Field>

        <Button
          type='submit'
          variant='light'
          size='lg'
          disabled={isSubmitting}
          className='w-full'
        >
          {isSubmitting ? <Loader2 className='animate-spin' /> : <Mail />}
          {isSubmitting ? CONTACT_CONTENT.submitting : CONTACT_CONTENT.submit}
        </Button>
      </form>

      <StatusModal
        open={modalOpen}
        status={status}
        onOpenChange={setModalOpen}
        onAction={handleModalAction}
      />
    </>
  );
}
