import { Button, Form, Input } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  setIsRegister: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm: FC<Props> = ({ setIsRegister }) => {
  const [action, setAction] = useState<string>("");

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Неверный формат почты"
        label="Почта"
        labelPlacement="outside"
        name="email"
        placeholder="Введите почту"
        type="email"
      />

      <Input
        isRequired
        errorMessage="Неверный логин"
        label="Логин"
        labelPlacement="outside"
        name="login"
        placeholder="Введите логин"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Неверный пароль"
        label="Пароль"
        labelPlacement="outside"
        name="password"
        placeholder="Введите пароль"
        type="password"
      />

      <div className="flex gap-4 flex-col justify-center w-full">
        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
        <Button
          type="button"
          variant="flat"
          onPress={() => setIsRegister((prev) => !prev)}
        >
          У меня есть аккаунт
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
};
