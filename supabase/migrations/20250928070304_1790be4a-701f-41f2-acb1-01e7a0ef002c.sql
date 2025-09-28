-- Create priests table
CREATE TABLE public.priests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  s_no TEXT,
  name TEXT NOT NULL,
  birth_date DATE,
  feast_day DATE,
  email TEXT,
  address_id TEXT,
  prerana TEXT,
  phone TEXT,
  mobile_1 TEXT,
  mobile_2 TEXT,
  father_name TEXT,
  father_via TEXT,
  mother_name TEXT,
  mother_dv TEXT,
  additional_address TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.priests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public access (since no authentication mentioned)
CREATE POLICY "Allow public access to priests" 
ON public.priests 
FOR ALL 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_priests_updated_at
BEFORE UPDATE ON public.priests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();