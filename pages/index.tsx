import { useTheme } from 'next-themes'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme</button>
      <h1 className="text-3xl font-bold underline text-teal-600 dark:text-red-700">
        Hello world!
      </h1>
    </>
  )
}

export default Home
