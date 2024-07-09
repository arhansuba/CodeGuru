/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wGFNQxa37tP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"


export default function Component() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-lg">
      <div className="relative">
        <Textarea
          placeholder="Message CodeGuru..."
          className="rounded-2xl border border-muted px-4 py-3 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[48px] resize-none"
          rows={1}
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50">
            <PaperclipIcon className="w-5 h-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50" disabled>
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
      <p className="text-xs font-medium text-center text-neutral-700">
        CodeGuru can make mistakes. Consider checking important information.
      </p>
    </div>
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


function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}