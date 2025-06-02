"use client";   // Next.js 14 ke app directory ke liye zaroori

import { Accordion, AccordionItem } from "@heroui/react";

export default function DemoAccordion() {
  return (
    <Accordion>
      <AccordionItem value="item-1" title="First Item">
        <p>This is the content for the first item.</p>
      </AccordionItem>
      <AccordionItem value="item-2" title="Second Item">
        <p>This is the content for the second item.</p>
      </AccordionItem>
    </Accordion>
  );
}
