import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, projectTitle, formType, note } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      console.warn('Supabase env vars missing; skipping DB insert.');
      return NextResponse.json({ success: true, warning: 'Database credentials missing' });
    }

    const supabase = createClient(url, key);

    const { error } = await supabase
      .from('uptown_form_submits')
      .insert([
        {
          name,
          phone,
          project_title: projectTitle || null,
          form_type: formType || null,
          note: note || null,
        },
      ]);

    if (error) {
      console.error('Error inserting lead into uptown_form_submits:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Server error';
    console.error('API route lead insert error:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
