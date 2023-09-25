// lib/jokes.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function list_questions() {
  let questions = await prisma.Question.findMany();
  return questions;
}

export async function get_question(id) {
  let question = await prisma.Question.findUnique({
    where: { id }
  });
  return question;
}

export async function get_answer(id) {
  let question = await prisma.Question.findUnique({
    where: { id }
  });
  return question.id;
}

export async function create_question(question) {
  await prisma.Question.create({ 
    data: question
  });
}

{/*
export async function get_joke(id) {
  let joke = await prisma.joke.findUnique({
    where: { id }
  });
  return joke;
}

export async function create_joke(joke) {
  await prisma.joke.create({ data: joke });
}

export async function update_joke(joke) {
  await prisma.joke.update({
    where: { id: joke.id },
    data: joke
  });
}

export async function delete_joke(id) {
  await prisma.joke.delete({
    where: { id }
  });
}
*/}
