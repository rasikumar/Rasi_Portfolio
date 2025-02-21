import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div className="min-h-screen m-auto flex flex-col justify-center items-center text-center p-6 gap-6">
      <h1 className="text-4xl font-extrabold animate-pulse">
        🚀 Hi, I&apos;m Rasi Kumar! A React Developer. 🎨
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        I&apos;m a passionate frontend and full-stack developer specializing in
        React, Next.js, Tailwind CSS, and UI/UX design. Currently working on a
        task management web app and exploring innovative web solutions.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg">
        Something amazing is coming soon! My portfolio is currently under
        construction, but I’m working hard behind the scenes to bring you
        something special. Stay tuned for updates, and be sure to check back
        soon!
      </p>
      <p className="text-md italic text-gray-500 dark:text-gray-400">
        Have any thoughts or want to connect? Reach out—I&apos;d love to hear
        from you! 😊
      </p>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
