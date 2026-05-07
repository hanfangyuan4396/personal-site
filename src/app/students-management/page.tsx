import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { StudentsManagementClient } from "./students-management-client";
import { RequireAuth } from "@/components/require-auth";
import { RequireRole } from "@/components/require-role";
import { Role } from "@/lib/auth";

export default async function StudentsManagementPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const t = await getTranslations();

  return (
    <RequireAuth>
      <RequireRole required={Role.Admin}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="mb-5 rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.72)] px-5 py-4 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045]">
            <h1 className="text-xl font-semibold">{t("students.title")}</h1>
          </div>
          <Suspense fallback={<div>{t("status.loading")}</div>}>
            <StudentsManagementClient />
          </Suspense>
        </div>
      </RequireRole>
    </RequireAuth>
  );
}
