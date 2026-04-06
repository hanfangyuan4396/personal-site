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
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <h1 className="mb-4 text-xl font-semibold">{t("students.title")}</h1>
          <Suspense fallback={<div>{t("status.loading")}</div>}>
            <StudentsManagementClient />
          </Suspense>
        </div>
      </RequireRole>
    </RequireAuth>
  );
}
