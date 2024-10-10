export default function Header() {
  return (
    <header className="flex flex-col items-start gap-1">
      <a className="text-medium inline-block font-medium no-underline" href="/">
        Julien Ducrot
      </a>
      <span className="text-medium font-medium leading-none text-gray-1100">
        JavaScript Developer. React & React Native enthusiast.
      </span>
    </header>
  );
}
