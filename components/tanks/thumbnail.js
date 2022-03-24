import Link from "next/link";

export default function TankThumbnail(props) {
  return (
    <div class="mb-10">
      <Link href={`/tank/${props.TankID}`}>
        <a>
          <div class="w-full border rounded-lg inline-block border-1 border-black hover:cursor-pointer p-5 hover:bg-teal-700">
            <h4 class="text-xl font-bold underline mb-3">{props.Name}</h4>
            <p>Gallons: {props.Size}</p>
            <p>Type: {props.Type}</p>
            <p># Fish: 5</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
