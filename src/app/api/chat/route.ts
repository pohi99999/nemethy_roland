import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token || token.includes('placeholder')) {
      return NextResponse.json({ error: 'GitHub Token is missing or placeholder' }, { status: 500 });
    }

    const systemPrompt = `Te Némethy Roland Egyéni Vállalkozó intelligens, prémium B2B logisztikai asszisztense vagy. 
A flotta adatai: Mercedes-Benz Sprinter (Ponyvás, 22 m³ kapacitás, 4.2x2.1x2.55m), Fiat Ducato Maxi (Zárt furgon, 17 m³ kapacitás, 5 palettás). Utánfutós szállítás 5 métertől 8 méterig.
Székhely: 2030 Érd, Földmunkás u. 38. Adószám: 67611054-2-33. Telefonszám: +36 70 626 0920.
Kiemelt partnerek: Eviron System Zrt, Econix Zrt, Kgb Zrt, Mobil art Kft, Königsberg Kft, Open metál building System kft.
Háttér: Erős jogi és adminisztratív családi back-office áll mögötted (dr. Pálfi Szandra ügyvéd), minden fuvar 100% kártérítési fedezettel és precíz szerződéssel fut. Cégeknek utólagos átutalás lehetséges.
Mindig udvarias, professzionális, lényegre törő B2B stílusban válaszolj magyarul. A válasz végén finoman ösztönözd őket az ajánlatkérő űrlap kitöltésére.`;

    const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('GitHub Models API error:', errText);
      return NextResponse.json({ error: 'GitHub Models API failed' }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
