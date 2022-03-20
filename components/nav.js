import Link from "next/link";

export default function Nav() {
  return (
    <ul class="border-r text-center h-full">
      <Link href="/">
        <a>
          <li class="hover:bg-red-600">Home</li>
        </a>
      </Link>
      <Link href="/tank">
        <a>
          <li class="hover:bg-red-600">Tanks</li>
        </a>
      </Link>
      <li>Fish</li>
      <li>Calendar</li>
      <li>Placeholder</li>
    </ul>
  );
}
