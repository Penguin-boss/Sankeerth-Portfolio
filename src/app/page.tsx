import { NavBar } from "@/components/navigation/NavBar";
import { Identity } from "@/components/moments/Identity";
import { Work } from "@/components/moments/Work";
import { Context } from "@/components/moments/Context";
import { Connection } from "@/components/moments/Connection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Identity />
        <Work />
        <Context />
        <Connection />
      </main>
    </>
  );
}
