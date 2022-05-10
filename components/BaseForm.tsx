import React, { ReactElement } from "react";
import {
  Control,
  Controller,
  ControllerProps,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IBaseForm<T> {
  onSubmit: SubmitHandler<T>;
  initialValues: T;
  className?: string | undefined;
  children: React.ReactElement<any>[] | React.ReactElement<any>;
}
const BaseForm = <T extends unknown>({
  children,
  onSubmit,
  initialValues,
  className,
}: IBaseForm<T>) => {
  // @ts-ignore
  const { control, handleSubmit } = useForm<T>({
    defaultValues: initialValues,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {React.Children.map(children, (child: ReactElement<TFormItem>) => {
        return React.cloneElement(child, { control });
      })}
    </form>
  );
};

interface TFormItem extends ControllerProps {
  control?: Control<any>;
}

const FormItem: React.FC<TFormItem> = (props) => {
  return (
    <div>
      <Controller {...props} />
    </div>
  );
};

export { BaseForm, FormItem };
