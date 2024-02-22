async function getQuote(): Promise<any[]> {
  const response = await fetch("http://api.forismatic.com/api/1.0/", {
    method: "POST",
    body: {
      lang: "en",
      format: "json",
      method: "getQuote",
    },
  });
  const data = await response.json();
  return data;
}

async function Quote() {
  const quote = await getQuote();
  console.log(quote);

  return (
    <div>
      <h1>Quote</h1>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;
