import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { Typography } from '../components/atoms/Typography';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Theme
      </button>
      <div className="bg-red-700" style={{ width: '800px' }}>
        <Typography variant="h1" align="justify" className="text-3xl font-bold">
          Olá Mundo! Este é um texto de teste. Isso mudara o mundo
        </Typography>
      </div>
    </>
  );
};

export default Home;
