const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Question Model', () => {
  it('should create a question', async () => {
    const Question = await prisma.newQuestion.create({
      data: {
        content: 'Is this a test question?',
      },
    });

    expect(Question.content).toBe('Is this a test question?');
  });

});
