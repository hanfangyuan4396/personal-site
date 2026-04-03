import { ContactPanel } from "@/components/shared/contact-panel";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-blue-500/10 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">联系我</h2>
          <p className="mt-2 text-muted-foreground">欢迎交流合作，随时可以找到我</p>
        </div>

        <ContactPanel />
      </div>
    </section>
  );
}
