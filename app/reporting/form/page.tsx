import { Suspense } from "react"
import ReportingFormContent from "@/components/reporting-form-content"

export default function ReportingFormPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ReportingFormContent />
    </Suspense>
  )
}
