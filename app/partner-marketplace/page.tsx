import { PartnerMarketplaceContent, emissionTypes } from "@/app/partner-marketplace/marketplace-content"
import type { EmissionTypeId } from "@/app/partner-marketplace/marketplace-content"

type PartnerMarketplaceIndexPageProps = {
  searchParams?: { source?: string }
}

const fallbackTypeId: EmissionTypeId = "mobile"

const isEmissionTypeId = (value: string): value is EmissionTypeId =>
  emissionTypes.some((type) => type.id === value)

export default function PartnerMarketplaceIndexPage({ searchParams }: PartnerMarketplaceIndexPageProps) {
  const requestedSource = typeof searchParams?.source === "string" ? searchParams.source : undefined
  const activeTypeId = requestedSource && isEmissionTypeId(requestedSource) ? requestedSource : fallbackTypeId

  return <PartnerMarketplaceContent activeTypeId={activeTypeId} />
}
