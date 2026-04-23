
-- Orders table for storing customer order requests
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  discord TEXT NOT NULL,
  package TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit a new order
CREATE POLICY "Anyone can create an order"
ON public.orders FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view orders (admin dashboard later)
CREATE POLICY "Authenticated users can view orders"
ON public.orders FOR SELECT
TO authenticated
USING (true);

-- Newsletter / waitlist subscribers
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
ON public.subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
ON public.subscribers FOR SELECT
TO authenticated
USING (true);
