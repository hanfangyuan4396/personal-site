import { ContactPanel } from "@/components/shared/contact-panel";

type ContactSectionProps = {
  variant?: "default" | "home";
};

const sectionClassNames = {
  default: "border-t border-[oklch(0.72_0.045_100/0.14)] py-16 sm:py-24 dark:border-white/[0.06]",
  home:
    "border-t border-[oklch(0.72_0.045_100/0.14)] py-16 sm:py-24 dark:border-white/[0.06]",
};

const homeLinkClassName =
  "group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-[oklch(0.38_0.11_155)] dark:hover:text-[oklch(0.78_0.12_155)]";

export function ContactSection({ variant = "default" }: ContactSectionProps) {
  return (
    <section id="contact" className={sectionClassNames[variant]}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">联系我</h2>
          <p className="mt-2 text-muted-foreground">欢迎交流合作，随时可以找到我</p>
        </div>

        <ContactPanel
          variant={variant}
          linkClassName={variant === "home" || variant === "default" ? homeLinkClassName : undefined}
        />
      </div>
    </section>
  );
}
