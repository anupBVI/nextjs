import Image from "next/image";
import img1 from "../public/1.jpg";

function PetsPage() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Image src={img1} placeholder="blur" alt="" width={280} height={420} />

      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="" width={280} height={420} />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
