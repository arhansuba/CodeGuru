/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/NWI4pBBwfjF
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from "react"


export function CodeGuru() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">CodeGuru</h1>
            <p className="text-muted-foreground md:text-lg">
              The best code is already written; you just have to find it on the internet.
            </p>
            <form className="w-full max-w-xl">
              <Input
                type="search"
                placeholder="Search for code..."
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </form>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="#"
                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                prefetch={false}
              >
                React
              </Link>
              <Link
                href="#"
                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                prefetch={false}
              >
                JavaScript
              </Link>
              <Link
                href="#"
                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                prefetch={false}
              >
                Python
              </Link>
              <Link
                href="#"
                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                prefetch={false}
              >
                Vue
              </Link>
              <Link
                href="#"
                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                prefetch={false}
              >
                Tailwind
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <div className="container mx-auto max-w-4xl py-8 md:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>app.js</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>2.3 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch('/api/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>index.html</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>HTML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>1.7 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  
</body>
</html>`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>styles.css</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>4.2 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>main.py</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>3.1 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def submit():
    form_data = request.form
    # Process the form data and return a response
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>main.go</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Go</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>2.8 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })

    fmt.Println("Listening on port 8080...")
    http.ListenAndServe(":8080", nil)
}`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>App.vue</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Vue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>2.1 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>



`}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-muted-foreground" />
                    <span>main.rs</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Rust</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
                    <span>2.5 KB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground">{`fn main() {
    println!("Hello, world!");
}
`}</pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-background px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          &copy; 2024 CodeGuru. The best code is already written; you just have to find it on the internet.
        </div>
      </footer>
    </div>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function PaperclipIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}