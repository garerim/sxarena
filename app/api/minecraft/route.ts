import { status } from 'minecraft-server-util';
import { NextResponse } from "next/server";

interface MinecraftResponse {
    onlinePlayers: number;
    maxPlayers: number;
    version: string;
    // description: string;
}


export async function GET(
    req: Request
) {
    const MINECRAFT_SERVER_HOST = process.env.MINECRAFT_SERVER_HOST; // Nom de domaine ou IP du serveur Minecraft
    const MINECRAFT_SERVER_PORT = parseInt(
        process.env.MINECRAFT_SERVER_PORT || '25565',
        10
    ); // Port du serveur (par défaut : 25565)

    if (!MINECRAFT_SERVER_HOST) {
        return new NextResponse('Le serveur Minecraft n\'est pas configuré.', { status: 500 });
    }
    try {
        // Pinger le serveur Minecraft pour récupérer les données
        const response = await status(MINECRAFT_SERVER_HOST, MINECRAFT_SERVER_PORT);

        const result: MinecraftResponse = {
            onlinePlayers: response.players.online,
            maxPlayers: response.players.max,
            version: response.version.name,
            // description: response.description.text,
        };

        return NextResponse.json(result);
    } catch (error) {
        console.log("[MINECRAFT_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}