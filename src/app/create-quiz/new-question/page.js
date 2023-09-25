
export default async function NewQuestion() {
  const options = [
    'true', 'false'
  ];

  return (
    <main className="text-center min-h-screen">
      <h1 className="text-2xl py-8">New Question</h1>
      <form action="/create-quiz" method="post">
        <label htmlFor="content" className="">
          Question: <br/>
          <input type="text" name="content" className="text-black" />
        </label>
        <br/>
        <br/>
        <label htmlFor="answer" className="">
          Correct Answer: <br/> 
          <select name="answer" id="answer" className="text-black">
              <option value="true">True</option>
              <option value="false">False</option>
          </select>
        </label>
        <div className="my-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded"
                  type="Add question">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
