"use client";
import { Card, CardHeader, CardFooter } from "@heroui/react";

export default function DemoCard() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Card Title</h2>
      </CardHeader>
      
      <CardFooter>
        <button className="btn btn-primary">Action</button>
      </CardFooter>
    </Card>
  );
}
