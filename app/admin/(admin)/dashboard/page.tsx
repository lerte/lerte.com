import { Card, Divider } from 'actify'
import BarChart from '@/components/BarChart'
import { fetchCardData, fetchRevenue } from '@/app/lib/data'
import { Boxes, Clock3, Archive, Users } from 'lucide-react'

export default async function DashBoard() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData()

  const cards = [
    {
      title: 'Collected',
      value: totalPaidInvoices,
      icon: <Boxes />
    },
    {
      title: 'Pending',
      value: totalPendingInvoices,
      icon: <Clock3 />
    },
    {
      title: 'Total Invoices',
      value: numberOfInvoices,
      icon: <Archive />
    },
    {
      title: 'Total Customers',
      value: numberOfCustomers,
      icon: <Users />
    }
  ]

  const revenue = await fetchRevenue()

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} className="bg-surface">
            <div className="flex items-center gap-2 p-2">
              {card.icon}
              <span className="text-xl">{card.title}</span>
            </div>
            <Divider />
            <div className="px-4 py-8 text-2xl font-medium gap-4 grid place-content-center">
              {card.value}
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-4">
          <div className="text-2xl font-black">Recent Revenue</div>
          <BarChart data={revenue} />
        </div>
        <div className="flex w-full flex-col md:col-span-4 lg:col-span-4"></div>
      </div>
    </>
  )
}
