import { title } from "@/components/primitives";
import { Card } from "@heroui/react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="w-full max-w-7xl flex gap-10 flex-col">
      <h1 className={title()}>Our Two Floral Tiers</h1>
      <hr className="w-full border-warning" />
      <section className="flex gap-4 flex-wrap justify-center">
        <Card className="w-full max-w-xs gap-4 p-10 bg-accent/30 border-foreground shadow-sm">
          <Card.Header className="pb-4">
            <Card.Title className="uppercase text-black text-3xl font-bold tracking-wide">Petite</Card.Title>
            <hr className="border-foreground w-full mt-4" />
            <div className="text-2xl font-extrabold text-black mt-2">$10<span className="text-sm font-normal text-muted-foreground">/Table/Week</span></div>
          </Card.Header>
          <Card.Content className="pt-4">
            <p className="text-sm font-semibold text-black mb-2">1-3 focal flowers, complemented by seasonal greenery and filler</p>
            <Card.Description className="text-black/50 leading-relaxed">
              A simple, delicate touch for your tables. Designed for those looking for a subtle floral accent while keeping the table open and uncluttered.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card className="w-full max-w-xs gap-4 p-10 bg-warning/30 border-foreground shadow-sm">
          <Card.Header className="pb-4">
            <Card.Title className="uppercase text-black text-3xl font-bold tracking-wide">Signature</Card.Title>
            <hr className="border-foreground w-full mt-4" />
            <div className="text-2xl font-extrabold text-black mt-2">$15<span className="text-sm font-normal text-muted-foreground">/Table/Week</span></div>
          </Card.Header>
          <Card.Content className="pt-4">
            <p className="text-sm font-semibold text-black mb-2">4-6 focal flowers, complemented by seasonal greenery and filler</p>
            <Card.Description className="text-black/50 leading-relaxed">
              A fuller arrangement designed
              to make your tables feel
              finished, inviting, and special.
            </Card.Description>
          </Card.Content>
        </Card>
      </section>
      <div className="text p-4">
        <p>*Flower varieties and colors will vary with seasonal availability. Each arrangement is
        thoughtfully designed using ethically sourced flowers available at the time of delivery.</p>
      </div>
    </div>
  );
}
