'use client';

import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
}: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-106.25 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="inline-flex items-center space-x-2 mb-6 mx-auto">
            <div className="w-12 h-12 bg-linear-to-br from-[#0A3C78] to-[#0FB9C6] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <span className="text-3xl font-bold text-[#0A3C78]">Cholo</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">{title}</DialogTitle>
          <DialogDescription className="text-gray-600">{description}</DialogDescription>
        </DialogHeader>
        {children}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            By continuing, you agree to our{' '}
            <a href="#" className="text-[#0FB9C6] hover:text-[#0A3C78] font-semibold transition-colors">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-[#0FB9C6] hover:text-[#0A3C78] font-semibold transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}