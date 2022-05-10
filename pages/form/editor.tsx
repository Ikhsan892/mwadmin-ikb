import Layout from "@mwadmin/components/Layout";
import React, { ReactElement, useCallback, useState } from "react";
import update from "immutability-helper";
import {
  Card,
  CardContent,
  Divider,
  OutlinedInput,
  SvgIcon,
} from "@mui/material";
import { motion } from "framer-motion";
import FormWidgetDrag from "@mwadmin/components/FormWidgetDrag";
import {
  PowerInput as PowerInputIcon,
  RadioButtonUnchecked,
  RestartAlt as RestartAltIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import FormWrapperDrop from "@mwadmin/components/FormWrapperDrop";
import { DndProvider, DropTargetMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TList } from "@mwadmin/type/widgetType";
import FormWidgetList from "@mwadmin/components/FormWidgetList";

type TWidgetsChildren = {
  id: number;
  icon: React.ReactElement<typeof SvgIcon> | null;
  label: string;
  type: "LAYOUT" | "WIDGET";
};

type TWidgets = {
  label: string;
  children: TWidgetsChildren[];
};

const widgets: TWidgets[] = [
  {
    label: "Layout",
    children: [
      {
        id: 1,
        icon: null,
        label: "Row",
        type: "LAYOUT",
      },
      {
        id: 2,
        icon: null,
        label: "Column",
        type: "LAYOUT",
      },
    ],
  },
  {
    label: "Widget",
    children: [
      {
        id: 1,
        icon: <PowerInputIcon />,
        label: "Radio Button",
        type: "WIDGET",
      },
      {
        id: 2,
        icon: <RadioButtonUnchecked />,
        label: "Select",
        type: "WIDGET",
      },
    ],
  },
];

function Editor() {
  const [list, setList] = useState<TList[]>([]);

  const handleDrop = (
    item: any,
    monitor: DropTargetMonitor<any, {}>
  ): {} | undefined | any => {
    setList((list) => {
      return [...list, { ...item }];
    });
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prevCards: TList[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as TList],
        ],
      })
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={"grid grid-cols-4"}>
        <Card
          variant={"outlined"}
          component={motion.div}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardContent>
            <h4 className={"text-2xl font-semibold"}>Form Editor</h4>
            <Divider className={"my-3"} />
            <OutlinedInput
              placeholder={"Search Widget"}
              size={"small"}
              className={"w-full"}
            />
            <Divider className={"my-3"} />
            {widgets &&
              widgets.map((data) => (
                <>
                  <h3 className={"font-medium text-md mt-3"}>{data.label}</h3>
                  <div className={"grid grid-cols-2 gap-5 mt-3"}>
                    {data.children.length > 0 &&
                      data.children.map((item) => (
                        <FormWidgetDrag
                          id={item?.id}
                          icon={item?.icon}
                          label={item?.label}
                          type={item?.type}
                        />
                      ))}
                  </div>
                </>
              ))}
          </CardContent>
        </Card>
        <Card className={"col-span-3"} variant={"outlined"}>
          <CardContent className={"h-full"}>
            <div className={"flex items-center space-x-3 mb-5"}>
              <LoadingButton
                variant={"outlined"}
                startIcon={<RestartAltIcon />}
                color={"error"}
              >
                Reset
              </LoadingButton>
              <LoadingButton variant={"outlined"} startIcon={<SaveIcon />}>
                Save
              </LoadingButton>
              <LoadingButton variant={"outlined"}>Toggle Preview</LoadingButton>
            </div>
            <FormWrapperDrop onDrop={handleDrop}>
              {list && list.length > 0 ? (
                <ul>
                  {list.map((data, index) => (
                    <FormWidgetList
                      key={index}
                      label={data.label}
                      id={data.id}
                      index={index}
                      moveCard={moveCard}
                    />
                  ))}
                </ul>
              ) : (
                <p>Kosong</p>
              )}
            </FormWrapperDrop>
          </CardContent>
        </Card>
      </div>
    </DndProvider>
  );
}

Editor.getLayout = function getLayout(page: ReactElement) {
  // @ts-ignore
  return <Layout title={"Form Editor"}>{page}</Layout>;
};

export default Editor;
