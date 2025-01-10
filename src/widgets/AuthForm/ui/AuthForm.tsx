import { FC, useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Button } from "@nextui-org/button";
import { closeModal } from "../model/AuthSlice";

export const AuthForm: FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const isOpen = useSelector((state: RootState) => state.authForm.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen ? (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-96 flex items-center justify-center bg-zinc-900 p-12 rounded-xl">
          {isRegister ? (
            <RegisterForm setIsRegister={setIsRegister} />
          ) : (
            <LoginForm setIsRegister={setIsRegister} />
          )}
          <Button
            className="absolute top-2 right-2"
            isIconOnly
            onPress={() => dispatch(closeModal())}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5L5 19M5.00001 5L19 19"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      ) : null}
    </>
  );
};
