-- Remove unused columns from rsvps table
ALTER TABLE rsvps 
DROP COLUMN IF EXISTS email,
DROP COLUMN IF EXISTS phone,
DROP COLUMN IF EXISTS number_of_guests;
