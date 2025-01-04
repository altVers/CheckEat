import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";

export default function DownloadAppSections() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-6 pb-24">
      <h2 className="font-bold text-3xl">Скачайте наше приложение</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Image src="https://i.ibb.co/YR1sYQt/Frame-32.png" isBlurred />
        </div>
        <div className="col-span-9 flex w-full flex-col">
            <p className="pb-4">Наше приложение позволит получить доступ к таким возможностям прямо из смартфона:</p>
          <Tabs aria-label="Options">
            <Tab key="physic" title="Физлицам">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="business" title="Бизнесу">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
