-- Add security documentation to handle_new_user function
-- This addresses the DEFINER_OR_RPC_BYPASS security finding

COMMENT ON FUNCTION public.handle_new_user() IS 
'SECURITY CRITICAL: This function uses SECURITY DEFINER and is designed ONLY for auth.users trigger.
DO NOT expose this as an RPC function or modify it to accept external parameters.
DO NOT call this function directly from application code.
If similar functionality is needed elsewhere, create a new function with explicit auth.uid() validation.
Current usage: Automatically creates a profile entry when a new user signs up via Supabase Auth.';
