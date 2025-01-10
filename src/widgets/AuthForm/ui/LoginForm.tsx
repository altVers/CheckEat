import { Button } from "@nextui-org/button";
import { Form, Input } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  setIsRegister: Dispatch<SetStateAction<boolean>>;
}

export const LoginForm: FC<Props> = ({ setIsRegister }) => {
  const [action, setAction] = useState<string>("");

  return (
    <>
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
            Войти
          </Button>
          <Button
            type="button"
            variant="flat"
            onPress={() => setIsRegister((prev) => !prev)}
          >
            Зарегистрироваться
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </>
  );
};
