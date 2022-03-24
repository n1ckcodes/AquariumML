import Link from "next/link";

export default function ToolBar() {
  return (
    <>
      <Link href="/tank/new">
        <a>
        <button class="btn btn-wide btn-outline">Add new</button>
        </a>
      </Link>
      <div class="divider"></div>
    </>
  );
}
