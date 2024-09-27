import { Button } from "@/components/ui/button";
import Image from "next/image";
import ListingMapView from "./_components/listingMapView";

export default function Home() {
  return (
    <div className="px-10 py-4">
      <ListingMapView/>
    </div>
  );
}
