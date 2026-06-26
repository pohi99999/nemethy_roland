import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pickup, delivery, cargo, date, name, email, phone } = body;

    // Alapvető validáció
    if (!pickup || !delivery || !cargo || !date || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Minden mező kitöltése kötelező.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL is not defined');
      return NextResponse.json(
        { error: 'Belső szerverhiba: Webhook nincs konfigurálva.' },
        { status: 500 }
      );
    }

    // Adatok továbbítása a webhook felé
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pickup,
        delivery,
        cargo,
        date,
        name,
        email,
        phone,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook error: ${response.statusText}`);
    }

    return NextResponse.json(
      { message: 'Az ajánlatkérés sikeresen továbbítva lett.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Hiba történt az ajánlat feldolgozása közben.' },
      { status: 500 }
    );
  }
}
