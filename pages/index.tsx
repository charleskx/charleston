import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from '../components/atoms/Button';
import { Typography } from '../components/atoms/Typography';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        fullWidth
        size="large"
        variant="outlined"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        startIcon={theme === 'dark' ? <FiMoon /> : <FiSun />}
      >
        {theme} Theme
      </Button>

      <div className="bg-red-700" style={{ width: '800px' }}>
        <Typography variant="h1" align="justify" className="text-3xl font-bold">
          Olá Mundo! Este é um texto de teste. Isso mudara o mundo
        </Typography>
      </div>
    </>
  );
};

export default Home;
