"use client";
import { ImageCell } from "@/shared/components/ImageCell/ui/ImageCell";
import resPic from "../../public/restaurant-projectio.jpg";
import styles from "./page.module.scss";
import { Button } from "@nextui-org/button";
import CardsCollection from "@/widgets/CardsCollection/ui/CardsCollection";
import YaMap from "@/widgets/YaMap/ui/YaMap";
import DownloadAppSections from "@/widgets/DownloadAppSection/ui/DownloadAppSection";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <section className="container px-6 flex gap-4 justify-center min-h-screen items-center">
        <div className="flex flex-col gap-4 items-start">
          <h1 className={classNames("font-black text-8xl", styles.content__title)}>CheckEat</h1>
          <p className={classNames("2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md", styles.content__descr)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            beatae delectus iusto quaerat, aperiam enim fugiat error voluptatem
            suscipit nesciunt itaque ipsum natus! Quidem, velit dolorum dolores
            animi dolor rem.
          </p>
          <Button className={styles.content__btn}>Стать партнером</Button>
        </div>

        <div className="relative w-[418px] h-[597px]">
          <div className={styles["cells--first"]}>
            <ImageCell image={resPic} width={235} height={235} blur />
          </div>
          <div className={styles["cells--second"]}>
            <ImageCell image={resPic} width={235} height={235} blur />
          </div>
          <div className={styles["cells--third"]}>
            <ImageCell image={resPic} width={235} height={235} blur />
          </div>
          <div className={styles["cells--fourth"]}>
            <ImageCell image={resPic} width={235} height={235} blur />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-8 px-6 pb-24">
        <h2 className="font-bold text-3xl">Интересные места</h2>
        <CardsCollection />
      </section>
      <section className="container mx-auto flex flex-col gap-8 px-6 pb-24">
        <h2 className="font-bold text-3xl">Интерактивная карта</h2>
        <YaMap />
      </section>

      <DownloadAppSections />
    </>
  );
}
