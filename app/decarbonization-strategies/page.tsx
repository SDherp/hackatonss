import DecarbonizationStrategiesContent from "@/components/decarbonization-strategies-content"

type DecarbonizationStrategiesPageProps = {
  searchParams?: { source?: string }
}

export default function DecarbonizationStrategiesPage({ searchParams }: DecarbonizationStrategiesPageProps) {
  const source = typeof searchParams?.source === "string" ? searchParams.source : undefined

  return <DecarbonizationStrategiesContent source={source} />
}
