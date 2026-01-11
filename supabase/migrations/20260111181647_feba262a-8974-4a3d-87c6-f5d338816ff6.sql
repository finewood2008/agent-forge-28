-- Create table for customer inquiries/leads
CREATE TABLE public.customer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT NOT NULL,
  email TEXT,
  industry TEXT,
  requirements TEXT,
  source TEXT DEFAULT 'ai_chat',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow insert from anyone (public form submission)
CREATE POLICY "Anyone can submit inquiries"
ON public.customer_inquiries
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_customer_inquiries_updated_at
BEFORE UPDATE ON public.customer_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();