'use client'
import { openModal } from "@/widgets/AuthForm/model/AuthSlice";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FC } from "react";
import { useDispatch } from "react-redux";

export const Header: FC = () => {
  const dispatch = useDispatch()
  return (
    <header className="flex fixed top-0 left-0 w-full items-center justify-between px-6 py-4 z-50 backdrop-blur-md">
      <Link href="/" className="font-sans font-bold text-lg">
        CheckEat
      </Link>
      <Button color="primary" onPress={() => dispatch(openModal())}>Войти</Button>
    </header>
  );
};
