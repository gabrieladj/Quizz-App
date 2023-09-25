// app/joke/route.js

import { NextResponse } from 'next/server';

import { create_question } from '../lib/quiz';

export async function POST(request) {
  let data = await request.formData();

  let question = Object.assign({}, {
    content: data.get('content'),
    correctAnswer: (data.get('answer') === "true"),
  });
  console.log("create_question", question);

  let question1 = await create_question(question);
  console.log("created", question1);

  let resp = new Response("redirect", {
    status: 303,
    headers: {
      "Location": "/quiz",
    }
  });
  return resp;
}
