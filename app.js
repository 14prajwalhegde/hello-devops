export function handler(req, res) {
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      status: "healthy"
    }));

    return;
  }

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello DevOps</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #101827;
      color: #f8fafc;
      display: grid;
      place-items: center;
      min-height: 90vh;
      margin: 0;
    }
    main {
      max-width: 600px;
      padding: 36px;
      text-align: center;
    }
    h1 { color: #67e8f9; }
    p { line-height: 1.7; color: #cbd5e1; }
    code {
      background: #263449;
      padding: 5px 9px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <main>
    <h1>Hello, DevOps!</h1>
    <p>This application is built with Node.js.</p>
    <p>Code changes. Tests run. Containers are built.</p>
    <p>Change this message and watch the pipeline run.</p>
    <p>Health check: <code>/health</code></p>
  </main>
</body>
</html>`);

    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    error: "Not found"
  }));
}