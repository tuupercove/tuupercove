import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

export default function VTuberThaiHomepage() {
  const featuredVTubers = [
    {
      name: "Zuzu Panuda",
      image: "/api/placeholder/400/400",
      description: "Popular Thai VTuber known for gaming streams",
      subscribers: 500000
    },
    {
      name: "Mink Chudech",
      image: "/api/placeholder/400/400",
      description: "Entertaining variety content creator",
      subscribers: 350000
    },
    {
      name: "Neko Kawaii",
      image: "/api/placeholder/400/400",
      description: "Cute and energetic anime-style VTuber",
      subscribers: 250000
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isBordered>
        <NavbarBrand>
          <h1 className="font-bold text-xl text-red-600">VTuber Thai Info</h1>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat">
              เข้าสู่ระบบ / Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Top Thai VTubers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredVTubers.map((vtuber) => (
              <Card key={vtuber.name} isPressable>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <h3 className="font-bold text-xl">{vtuber.name}</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt={vtuber.name}
                    className="object-cover rounded-xl"
                    src={vtuber.image}
                    width={270}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <p>{vtuber.description}</p>
                  <p className="text-default-500">
                    {vtuber.subscribers.toLocaleString()} subscribers
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Divider className="my-8" />

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            เกี่ยวกับเรา / About Us
          </h2>
          <Card>
            <CardBody>
              <p className="text-center">
                VTuber Thai Info เว็บไซต์แหล่งรวมข้อมูลวีทูเบอร์ไทยที่ครบที่สุด
                ติดตามข่าวสาร คลิป และกิจกรรมของวีทูเบอร์ไทย
              </p>
              <p className="text-center mt-4">
                Your ultimate source for Thai VTuber information, news, and updates!
              </p>
            </CardBody>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-200 py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024 VTuber Thai Info. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}