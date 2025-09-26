// src/types/razorpay.d.ts
export {};

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }

  interface RazorpayConstructor {
    new (options: RazorpayOptions): RazorpayInstance;
  }

  interface RazorpayInstance {
    open(): void;
    close(): void;
    on(event: string, callback: (...args: any[]) => void): void;
  }

  interface RazorpayOptions {
    key: string;
    amount?: number;
    currency?: string;
    name?: string;
    description?: string;
    image?: string;
    order_id?: string;
    prefill?: { name?: string; email?: string; contact?: string };
    notes?: Record<string, any>;
    theme?: { color?: string };
    modal?: {
      ondismiss?: () => void;
      escape?: boolean;
      backdropclose?: boolean;
      confirm_close?: boolean;
    };
    handler?: (response: {
      razorpay_payment_id: string;
      razorpay_order_id?: string;
      razorpay_signature?: string;
    }) => void;

    
  }
}
