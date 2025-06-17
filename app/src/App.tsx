import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-screen h-screen flex items-center flex-col p-4'>
        <div className='w-full h-24 flex flex-col justify-center'>
          <div className='w-16 h-16 bg-transparent rounded-lg border duration-150 ease-in-out hover:border-accent-foreground cursor-pointer'></div>
        </div>
        <ModeToggle/>
        <h1 className='font-bold text-2xl'>Shadcn Electron</h1>
      </div>
    </ThemeProvider>
  );
}

export default App
