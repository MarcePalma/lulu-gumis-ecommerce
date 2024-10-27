import { NextResponse } from 'next/server';
import { getItemsFromDatabase } from '@/app/lib/database';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || undefined; // Convertir null a undefined

    try {
        const items = await getItemsFromDatabase(category); // Asegúrate de que esta función acepte el argumento
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ message: 'Error al obtener los productos' }, { status: 500 });
    }
}
