import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import classNames from "classnames";
import styles from "../styles/CardsCollection.module.scss";

export default function CardsCollection() {
  return (
    <div className="w-full gap-2 grid grid-cols-12">
      <Card
        className={classNames(
          "col-span-12 md:col-span-4 h-[300px] cursor-pointer",
          styles.card
        )}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black uppercase font-bold">Ресторан</p>
          <h4 className="text-black font-medium text-large">White Rabbit</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover hover:scale-125"
          src="https://i.ibb.co/dKNf4Gy/wrm-02.jpg"
        />
      </Card>
      <Card
        className={classNames(
          "col-span-12 md:col-span-4 h-[300px] cursor-pointer",
          styles.card
        )}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Ресторан
          </p>
          <h4 className="text-white font-medium text-large">Баран-Рапан</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.ibb.co/ThWP60P/baran-rapan-03.jpg"
        />
      </Card>
      <Card
        className={classNames(
          "col-span-12 md:col-span-4 h-[300px] cursor-pointer",
          styles.card
        )}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Бар
          </p>
          <h4 className="text-white font-medium text-large">
            SKWOLL
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.ibb.co/YkjcYqd/1571347816-522-pre-41-iz-luchshih-restorannyh-logotipov-dlya-vdohnoveniya.png"
        />
      </Card>
      <Card
        isFooterBlurred
        className={classNames(
          "col-span-12 md:col-span-5 h-[300px] cursor-pointer",
          styles.card
        )}
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black uppercase font-bold">Бар</p>
          <h4 className="text-black font-medium text-2xl">Bjuice</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src="https://i.ibb.co/gWgPZ7f/main-bjuiced-2.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Входит в топ-10 баров страны 🔥</p>
            <p className="text-black text-tiny">Открытие с 17:00</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Забронировать место
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className={classNames(
          "col-span-12 md:col-span-7 h-[300px] cursor-pointer",
          styles.card
        )}
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Ресторан
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            LHAMA MIA
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://i.ibb.co/S05m7vj/4c0406d1e2b693ca0d860b6445b22d6f.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Награжден звездой Michelin в 2024 году ⭐</p>
              <p className="text-tiny text-white/60">
                Лучший ресторан Москвы по мнению критиков
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Забронировать место
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
