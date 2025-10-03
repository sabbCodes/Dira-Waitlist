import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailSignupProps {
  onSubmit?: (email: string) => void | Promise<void>;
  isSubmitting?: boolean;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({ onSubmit, isSubmitting: propIsSubmitting = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: formIsSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const handleFormSubmit = async (data: EmailFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data.email);
      } else {
        // Default behavior - could integrate with an API
        console.log('Email submitted:', data.email);
      }
      reset();
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center gap-[39px] max-sm:flex-col max-sm:gap-4 max-sm:w-full"
      noValidate
    >
      <div className="flex flex-col max-sm:w-full">
        <div className="flex w-[287px] h-[39px] items-center gap-2.5 rounded bg-[rgba(0,0,0,0.00)] px-3 py-2.5 border-[0.125px] border-solid border-[#0F8577] max-sm:w-full">
          <input
            {...register('email')}
            type="email"
            placeholder="adegbolaafeez@gmail.com"
            className="w-full bg-transparent text-gray-500 text-sm font-[274] placeholder:text-gray-500 focus:outline-none focus:text-gray-300"
            aria-label="Email address"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </div>
        {errors.email && (
          <span
            id="email-error"
            className="text-red-400 text-xs mt-1 max-sm:text-center"
            role="alert"
          >
            {errors.email.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2.5 rounded bg-[#1A73EB] px-6 py-2.5 hover:bg-[#1557c7] transition-colors text-white text-base font-medium max-sm:w-full max-sm:py-3 disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={formIsSubmitting || propIsSubmitting}
      >
        {(formIsSubmitting || propIsSubmitting) ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining...
          </>
        ) : 'Join the waitlist'}
      </button>
    </form>
  );
};
