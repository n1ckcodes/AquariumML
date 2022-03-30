import Link from "next/link";

export default function TankThumbnail(props) {
  return (
    <div class="mb-10 w-10/12 border rounded-lg inline-block border-1 border-black hover:cursor-pointer p-5 hover:bg-teal-700">
      <div tabindex="0" class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title  text-primary-content  peer-checked:text-secondary-content">
          <h4 class="text-xl font-bold underline mb-3">{props.Name}</h4>
        </div>
        <div class="collapse-content text-primary-content peer-checked:text-secondary-content">
          <p>Gallons: {props.Size}</p>
          <p>Type: {props.Type}</p>
          <p># Fish: 5</p>
          <p>Last water change: 1/2/2</p>
        </div>
      </div>
    </div>
  );
}
