-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/yemjhemtfqufanymlnno/sql/new)
-- Creates the table needed for the User Analytics dashboard section

CREATE TABLE IF NOT EXISTS user_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  email TEXT,
  name TEXT,
  phone TEXT,
  sections_read INT DEFAULT 0,
  completed_notes INT DEFAULT 0,
  total_sections INT DEFAULT 0,
  total_notes INT DEFAULT 0,
  practice_done BOOLEAN DEFAULT FALSE,
  last_active TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert/update their own row (by user_id)
CREATE POLICY "Upsert own analytics" ON user_analytics
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Allow anyone to read aggregated analytics
CREATE POLICY "Read analytics" ON user_analytics
  FOR SELECT
  USING (true);
