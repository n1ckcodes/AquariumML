import Link from "next/link";

export default function TankThumbnail({ tank }) {
  console.log(tank);
  return (
    <Link href={`/tank/${tank}`}><a><div class="w-2/5 border rounded inline-block border-1 border-black hover:cursor-pointer">
      {tank}
    </div>
    </a></Link>
  );
}
