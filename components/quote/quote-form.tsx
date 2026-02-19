"use client"

import { Fragment, useState } from "react"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Briefcase,
  Wallet,
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
  service: z.string().min(1, "Välj en tjänst"),
  description: z.string().min(10, "Beskriv ditt projekt (minst 10 tecken)"),
  budget: z.string().min(1, "Välj ett budgetintervall"),
  timeline: z.string().min(1, "Välj när du vill starta"),
})

type FormData = z.infer<typeof formSchema>

const STEPS = [
  {
    title: "Personuppgifter",
    description: "Berätta vem du är",
    icon: User,
  },
  {
    title: "Ditt projekt",
    description: "Beskriv vad du behöver",
    icon: Briefcase,
  },
  {
    title: "Budget & tidplan",
    description: "Praktiska detaljer",
    icon: Wallet,
  },
  {
    title: "Granska & skicka",
    description: "Kontrollera dina uppgifter",
    icon: ClipboardCheck,
  },
] as const

const STEP_FIELDS: (keyof FormData)[][] = [
  ["name", "email"],
  ["service", "description"],
  ["budget", "timeline"],
  [],
]

const SERVICE_OPTIONS = [
  { value: "new-website", label: "Ny webbplats" },
  { value: "redesign", label: "Omdesign av befintlig webbplats" },
  { value: "ecommerce", label: "E-handel / Webbshop" },
  { value: "seo", label: "SEO & Sökmotoroptimering" },
  { value: "branding", label: "Digitalt varumärke & Design" },
  { value: "other", label: "Annat" },
]

const BUDGET_OPTIONS = [
  { value: "10k-30k", label: "10 000 – 30 000 kr" },
  { value: "30k-75k", label: "30 000 – 75 000 kr" },
  { value: "75k-150k", label: "75 000 – 150 000 kr" },
  { value: "150k+", label: "150 000+ kr" },
]

const TIMELINE_OPTIONS = [
  { value: "asap", label: "Så snart som möjligt" },
  { value: "1-month", label: "Inom 1 månad" },
  { value: "1-3-months", label: "Inom 1–3 månader" },
  { value: "3-6-months", label: "Inom 3–6 månader" },
  { value: "no-rush", label: "Ingen brådska" },
]

function getOptionLabel(
  value: string,
  options: { value: string; label: string }[],
) {
  return options.find((o) => o.value === value)?.label ?? value
}

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
      service: "",
      description: "",
      budget: "",
      timeline: "",
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

  function onSubmit(data: FormData) {
    console.log("Form data:", data)
    setSubmitted(true)
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
            {currentStep === 1 && <StepProjectDetails form={form} />}
            {currentStep === 2 && <StepBudgetTimeline form={form} />}
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
              <Button type="submit" size="lg" className="h-11">
                Skicka förfrågan
                <Send className="size-4" />
              </Button>
            )}
          </div>
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

function StepProjectDetails({ form }: { form: UseFormReturn<FormData> }) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Vad behöver du hjälp med?{" "}
              <span className="text-destructive">*</span>
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value || undefined}
            >
              <FormControl>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Välj en tjänst" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {SERVICE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Beskriv ditt projekt{" "}
              <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Berätta om ditt projekt, dina mål och vad du förväntar dig..."
                className="min-h-32 resize-none"
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

function StepBudgetTimeline({ form }: { form: UseFormReturn<FormData> }) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Budgetintervall <span className="text-destructive">*</span>
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value || undefined}
            >
              <FormControl>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Välj ett intervall" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BUDGET_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              När vill du komma igång?{" "}
              <span className="text-destructive">*</span>
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value || undefined}
            >
              <FormControl>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Välj en tidsplan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {TIMELINE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
      title: "Projektdetaljer",
      icon: Briefcase,
      items: [
        {
          label: "Tjänst",
          value: getOptionLabel(values.service, SERVICE_OPTIONS),
        },
        {
          label: "Beskrivning",
          value: values.description,
          multiline: true,
        },
      ],
    },
    {
      title: "Budget & tidplan",
      icon: Wallet,
      items: [
        {
          label: "Budget",
          value: getOptionLabel(values.budget, BUDGET_OPTIONS),
        },
        {
          label: "Tidsplan",
          value: getOptionLabel(values.timeline, TIMELINE_OPTIONS),
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
