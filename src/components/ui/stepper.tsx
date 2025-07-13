import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <nav className={cn('w-full', className)}>
      <ol className="flex items-center justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isComplete = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <li key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200',
                    {
                      'bg-blue-600 text-white': isComplete,
                      'bg-blue-600 text-white ring-4 ring-blue-100': isCurrent,
                      'bg-gray-200 text-gray-600': !isComplete && !isCurrent,
                    }
                  )}
                >
                  {isComplete ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={cn(
                      'text-sm font-medium',
                      {
                        'text-blue-600': isComplete || isCurrent,
                        'text-gray-500': !isComplete && !isCurrent,
                      }
                    )}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-xs text-gray-400 mt-1 max-w-20">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'h-0.5 w-16 mx-4 transition-all duration-200',
                    {
                      'bg-blue-600': stepNumber < currentStep,
                      'bg-gray-200': stepNumber >= currentStep,
                    }
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}