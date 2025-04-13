# Setting up Supabase for Your Portfolio

This guide will help you set up Supabase as the backend for your portfolio project.

## 1. Create a Supabase Account and Project

1. Go to [Supabase](https://supabase.com/) and sign up for a free account
2. Create a new project with a name like "frontend-portfolio"
3. Choose the free tier and a region close to you
4. Wait for your database to be created (usually takes 1-2 minutes)

## 2. Get Your API Keys

1. In your Supabase dashboard, go to Project Settings → API
2. You'll need two values:

   - **Project URL**: The URL of your Supabase project
   - **anon public key**: The anonymous API key for public access

3. Copy these values to your `.env.local` file:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

## 3. Create Database Tables

This portfolio uses the following database structure:

### Projects Table

Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  live_url TEXT,
  source_url TEXT,
  technologies TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add some sample data
INSERT INTO projects (title, description, image_url, live_url, source_url, technologies, featured)
VALUES
  (
    'E-commerce Platform',
    'A modern e-commerce site built with React and Node.js',
    'https://example.com/image1.jpg',
    'https://example-ecommerce.com',
    'https://github.com/username/ecommerce',
    ARRAY['React', 'Node.js', 'Express', 'MongoDB'],
    true
  ),
  (
    'Weather App',
    'A weather forecast application using the OpenWeather API',
    'https://example.com/image2.jpg',
    'https://weather-app-demo.vercel.app',
    'https://github.com/username/weather-app',
    ARRAY['React', 'Tailwind CSS', 'OpenWeather API'],
    false
  );
```

### Technique Examples Table

```sql
CREATE TABLE technique_examples (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  skill_level TEXT NOT NULL,
  code_snippet TEXT,
  demo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add some sample data
INSERT INTO technique_examples (title, description, category, skill_level, code_snippet)
VALUES
  (
    'React Query Basics',
    'A simple example of data fetching with React Query',
    'data-fetching',
    'beginner',
    'const { data, isLoading, error } = useQuery("todos", fetchTodos);'
  ),
  (
    'Advanced Filter with useReducer',
    'Complex data filtering using React useReducer',
    'data-filtering',
    'senior',
    'const [state, dispatch] = useReducer(filterReducer, initialState);'
  );
```

## 4. Set Up Storage Buckets

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called "images" with public access
3. Set up CORS policies to allow access from your app's domain

## 5. Test Your Connection

After setting up Supabase and updating your environment variables, run your app and test the Supabase connection. Check the console for any connection errors.

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
