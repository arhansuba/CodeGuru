/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tooREZLTK7Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-muted rounded-full w-20 h-20 flex items-center justify-center mb-4">
        <MessageCircleIcon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Start a new conversation</h3>
      <p className="text-muted-foreground mb-6">Click the button below to begin chatting with an expert.</p>
      <Button>New Chat</Button>
    </div>
  )
}

function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}