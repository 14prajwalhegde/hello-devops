
export function handler(req, res) {
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
    return;
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello DevOps</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 850px;
            margin: 50px auto;
            padding: 0 20px;
            color: #172033;
            line-height: 1.6;
          }
          h1 { color: #176b55; }
          .pipeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 14px;
            margin-top: 25px;
          }
          .stage {
            padding: 18px;
            border: 1px solid #d5e1e8;
            border-radius: 10px;
            background: #f5f9fb;
          }
          .stage h2 { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>Hello, DevOps!</h1>
        <p>A small application demonstrating how code moves from development to deployment.</p>

        <h2>From Code to Deployment</h2>
        <h2>What I Learned in DevOps</h2>
<p>
  You don't need to know everything before you start.
  Learn continuously, experiment, and solve problems one step at a time.
</p>
<ul>
  <li>Git and GitHub for collaboration</li>
  <li>Automation to reduce repetitive work</li>
  <li>Docker to package applications consistently</li>
  <li>CI/CD to test and deliver changes reliably</li>
</ul>
        <div class="pipeline">
          <div class="stage">
            <h2>1. Code</h2>
            <p>Build a feature and commit your changes with Git.</p>
          </div>
          <div class="stage">
            <h2>2. Test</h2>
            <p>GitHub Actions runs automated tests on a pull request.</p>
          </div>
          <div class="stage">
            <h2>3. Build</h2>
            <p>Package the tested application into a Docker image.</p>
          </div>
          <div class="stage">
            <h2>4. Deploy</h2>
            <p>Run the updated application in a Docker container.</p>
          </div>
        </div>
      </body>
      </html>
    `);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}
