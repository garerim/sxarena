"use client";
import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/ui/number-ticker";
import { Copy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MinecraftData {
  onlinePlayers: number | null;
}

export default function Home() {

  const [data, setData] = useState<MinecraftData>({
    onlinePlayers: 24
  });
  const [textToCopy, setTextToCopy] = useState("play.sxarena.fr");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Échec de la copie : ", err);
      });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/minecraft');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const result = await response.json();
        // setData({
        //   memberCount: result.memberCount,
        //   onlineCount: result.onlineCount,
        // });
        setData(result);
      } catch (err) {
        // setError((err as Error).message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="px-2 flex flex-col items-center relative">
      {/* <div className="w-3/5 h-80 bg-red-500"></div> */}
      <Image src={'/image/logo.png'} width={300} height={150} alt="Logo" />
      <Button onClick={handleCopy} className="text-3xl font-black py-6 flex items-center justify-between gap-4 mt-5">
        {copied ? (
          "Texte copié"
        ) : (
          <>
            PLAY.SXARENA.FR <Copy className="w-9 h-9 stroke-[2.5]" />
          </>
        )}
      </Button>
      <div className="flex items-center gap-2 mt-3">
        <div className='w-2 h-2 rounded-full bg-red-700 animate-ping' />
        <span className='font-bold text-lg'>
          <NumberTicker value={data.onlinePlayers ?? 0} /> joueurs en ligne</span>
      </div>
    </div>
  );
}
