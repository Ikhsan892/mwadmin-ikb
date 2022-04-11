interface IDashboard {
  color: string;
  notification: number[];
}

type TNavigationResponse = {
  id: number;
  name: string;
  parent: number;
};

interface INavigationResponse {
  message?: string;
  status?: string;
  data?: TNavigationResponse[];
}

export { type IDashboard, type INavigationResponse, type TNavigationResponse };
