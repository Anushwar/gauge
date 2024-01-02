interface EnvProps {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

type Env = Required<EnvProps>;

const env: Env = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

export default env;
