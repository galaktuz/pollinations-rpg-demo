fetch("https://gen.pollinations.ai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "openai",
    messages: [
      { role: "user", content: "Hello from Pollinations demo" }
    ]
  })
});
