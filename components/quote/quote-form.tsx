"use client"

import { Fragment, useState } from "react"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendQuoteEmail } from "@/app/actions/send-quote"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  User,
  Globe,
  Paintbrush,
  ClipboardCheck,
  Sparkles,
} from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Ange ditt namn (minst 2 tecken)"),
  company: z.string(),
  email: z
    .string()
    .min(1, "Ange din e-postadress")
    .email("Ange en giltig e-postadress"),
  phone: z.string(),
  websiteUrl: z.string(),
  designPreferences: z.string(),
  desiredFeatures: z.string(),
})

type FormData = z.infer<typeof formSchema>

const STEPS = [
  {
    title: "Personuppgifter",
    description: "Berätta vem du är",
    icon: User,
  },
  {
    title: "Nuvarande hemsida",
    description: "Har du en befintlig webbplats?",
    icon: Globe,
  },
  {
    title: "Designpreferenser",
    description: "Hur vill du att sidan ska se ut?",
    icon: Paintbrush,
  },
  {
    title: "Granska & skicka",
    description: "Kontrollera dina uppgifter",
    icon: ClipboardCheck,
  },
] as const

const STEP_FIELDS: (keyof FormData)[][] = [
  ["name", "email"],
  [],
  [],
  [],
]

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      websiteUrl: "",
      designPreferences: "",
      desiredFeatures: "",
    },
    mode: "onTouched",
  })

  async function handleNext() {
    const fields = STEP_FIELDS[currentStep]
    const valid = await form.trigger(fields)
    if (!valid) return
    setDirection("forward")
    setCurrentStep((s) => s + 1)
  }

  function handleBack() {
    setDirection("backward")
    setCurrentStep((s) => s - 1)
  }

  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(data: FormData) {
    setSending(true)
    setError(null)
    const result = await sendQuoteEmail(data)
    setSending(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error ?? "Något gick fel. Försök igen.")
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-10 text-center shadow-sm animate-in fade-in zoom-in-95 duration-500 md:p-14">
        <div className="relative">
          <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 shadow-lg shadow-secondary/25">
            <Check className="size-10 text-white" strokeWidth={3} />
          </div>
          <Sparkles className="absolute -right-2 -top-2 size-6 animate-pulse text-secondary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">
            Tack för din förfrågan!
          </h3>
          <p className="mx-auto max-w-sm text-muted-foreground">
            Vi har tagit emot dina uppgifter och återkommer med ett förslag inom
            1–2 arbetsdagar. Inget tryck, ingen spam.
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="mt-2 h-11"
          onClick={() => {
            setSubmitted(false)
            setCurrentStep(0)
            form.reset()
          }}
        >
          Skicka en ny förfrågan
        </Button>
      </div>
    )
  }

  const step = STEPS[currentStep]

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Progress indicator */}
      <div className="border-b border-border bg-muted/30 px-4 pb-5 pt-6 sm:px-8 md:px-10">
        <div className="flex items-center">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const isCompleted = i < currentStep
            const isCurrent = i === currentStep
            return (
              <Fragment key={i}>
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 md:size-10",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent &&
                      "border-primary bg-primary/10 text-primary ring-4 ring-primary/10",
                    !isCompleted &&
                      !isCurrent &&
                      "border-border bg-card text-muted-foreground",
                  )}
                >
                  {isCompleted ? (
                    <Check className="size-4 md:size-5" />
                  ) : (
                    <Icon className="size-4 md:size-5" />
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "mx-1 h-0.5 flex-1 rounded-full transition-all duration-500 sm:mx-2 md:mx-3",
                      i < currentStep ? "bg-primary" : "bg-border",
                    )}
                  />
                )}
              </Fragment>
            )
          })}
        </div>
        <p className="mt-4 text-center text-sm font-medium text-primary">
          Steg {currentStep + 1} av {STEPS.length}
        </p>
      </div>

      {/* Form content */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-10">
          {/* Step title */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              {step.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>

          {/* Step content with animation */}
          <div
            key={currentStep}
            className={cn(
              "animate-in fade-in duration-300",
              direction === "forward"
                ? "slide-in-from-right-3"
                : "slide-in-from-left-3",
            )}
          >
            {currentStep === 0 && <StepPersonalInfo form={form} />}
            {currentStep === 1 && <StepWebsiteUrl form={form} />}
            {currentStep === 2 && <StepDesignPreferences form={form} />}
            {currentStep === 3 && <StepReview form={form} />}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
            {currentStep > 0 ? (
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-11"
                onClick={handleBack}
              >
                <ChevronLeft className="size-4" />
                Tillbaka
              </Button>
            ) : (
              <div />
            )}

            {currentStep < STEPS.length - 1 ? (
              <Button
                type="button"
                size="lg"
                className="h-11"
                onClick={handleNext}
              >
                Nästa steg
                <ChevronRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" size="lg" className="h-11" disabled={sending}>
                {sending ? "Skickar..." : "Skicka förfrågan"}
                {!sending && <Send className="size-4" />}
              </Button>
            )}
          </div>

          {error && (
            <p className="mt-4 text-center text-sm text-destructive">{error}</p>
          )}
        </form>
      </Form>
    </div>
  )
}

function StepPersonalInfo({ form }: { form: UseFormReturn<FormData> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Namn <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Ditt fullständiga namn"
                className="h-11"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Företag{" "}
              <span className="font-normal text-muted-foreground">
                (valfritt)
              </span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Ditt företag" className="h-11" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              E-post <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="du@exempel.se"
                className="h-11"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Telefon{" "}
              <span className="font-normal text-muted-foreground">
                (valfritt)
              </span>
            </FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="070-123 45 67"
                className="h-11"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

function StepWebsiteUrl({ form }: { form: UseFormReturn<FormData> }) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="websiteUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Nuvarande hemsida{" "}
              <span className="font-normal text-muted-foreground">
                (valfritt)
              </span>
            </FormLabel>
            <FormControl>
              <Input
                type="url"
                placeholder="https://www.dinhemsida.se"
                className="h-11"
                {...field}
              />
            </FormControl>
            <p className="text-xs text-muted-foreground">
              Om du redan har en hemsida kan vi titta på den för att bättre förstå dina behov.
            </p>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

function StepDesignPreferences({ form }: { form: UseFormReturn<FormData> }) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="designPreferences"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Designpreferenser{" "}
              <span className="font-normal text-muted-foreground">
                (valfritt)
              </span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Beskriv hur du vill att din hemsida ska se ut, t.ex. stil, färger, inspiration från andra sajter..."
                className="min-h-28 resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="desiredFeatures"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Önskade funktioner{" "}
              <span className="font-normal text-muted-foreground">
                (valfritt)
              </span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="T.ex. kontaktformulär, bokningssystem, bildgalleri, blogg, kundrecensioner..."
                className="min-h-28 resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

function StepReview({ form }: { form: UseFormReturn<FormData> }) {
  const values = form.getValues()

  const sections = [
    {
      title: "Personuppgifter",
      icon: User,
      items: [
        { label: "Namn", value: values.name },
        ...(values.company
          ? [{ label: "Företag", value: values.company }]
          : []),
        { label: "E-post", value: values.email },
        ...(values.phone
          ? [{ label: "Telefon", value: values.phone }]
          : []),
      ],
    },
    {
      title: "Nuvarande hemsida",
      icon: Globe,
      items: [
        {
          label: "URL",
          value: values.websiteUrl || "Ingen angiven",
        },
      ],
    },
    {
      title: "Design & funktioner",
      icon: Paintbrush,
      items: [
        {
          label: "Design",
          value: values.designPreferences || "Inga angivna",
          multiline: true,
        },
        {
          label: "Funktioner",
          value: values.desiredFeatures || "Inga angivna",
          multiline: true,
        },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const SectionIcon = section.icon
        return (
          <div
            key={section.title}
            className="rounded-xl border border-border bg-muted/30 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <SectionIcon className="size-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
            </div>
            <dl className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
                >
                  <dt className="text-sm font-medium text-muted-foreground sm:w-28 sm:shrink-0">
                    {item.label}
                  </dt>
                  <dd
                    className={cn(
                      "break-words text-sm text-foreground",
                      "multiline" in item &&
                        item.multiline &&
                        "whitespace-pre-line",
                    )}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )
      })}
      <p className="pt-2 text-center text-xs text-muted-foreground">
        Kontrollera att allt stämmer innan du skickar.
      </p>
    </div>
  )
}
