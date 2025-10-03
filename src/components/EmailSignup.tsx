import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailSignupProps {
  onSubmit?: (email: string) => void;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
        disabled={isSubmitting}
        className="flex w-28 justify-between items-center rounded bg-[#1A73EB] p-2.5 max-sm:w-full max-sm:justify-center hover:bg-[#1557c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Join waitlist"
      >
        <span className="text-gray-50 text-center text-base font-normal">
          {isSubmitting ? 'Joining...' : 'Join waitlist'}
        </span>
      </button>
    </form>
  );
};
