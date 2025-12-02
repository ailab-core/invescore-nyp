import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { cn } from "uilab-core"
import { Calendar, Clock } from "lucide-react"
import AnimatedContent from "@/components/ui-patterns/animated-content"

const agenda = import("../../data/agenda.md")
  .then(async (res: any) => await fetch(res.default).then((response) => response.text()))

export default function Agenda() {
  const [content, setContent] = useState<string>("")

  agenda.then((txt: any) => setContent(txt))

  return (
    <div className="max-w-fit mx-auto my-24" id="agenda">
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.4}
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300">
            AGENDA
          </h1>
          <p className="text-muted-foreground text-lg">
            Schedule and important dates
          </p>
        </div>
      </AnimatedContent>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.6}
      >
        <div
          className={cn(
            "prose prose-slate dark:prose-invert max-w-none space-y-8",
            "[&_h2]:text-lg lg:[&_h2]:text-2xl [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-2 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-3",
            "[&_h3]:text-base lg:[&_h3]:text-xl [&_h3]:mb-3 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2",
            "[&_ul]:space-y-2 [&_ul]:my-4",
            "[&_li]:text-sm lg:[&_li]:text-base [&_li]:pl-4 [&_li]:border-l-2 [&_li]:border-primary/30 [&_li]:ml-8 [&_li]:text-primary",
            "[&_p]:text-muted-foreground [&_p]:leading-relaxed",
            "[&_code]:bg-secondary [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm",
            "[&_strong]:text-primary",
          )}
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-orange-300" />
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-300" />
                  {children}
                </h3>
              ),
              li: ({ children }) => (
                <li className="relative py-2 mb-0">
                  <div className="absolute -left-[5px] top-[15px] w-2 h-2 bg-primary rounded-full" />
                  {children}
                </li>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </AnimatedContent>
    </div>
  )
}
