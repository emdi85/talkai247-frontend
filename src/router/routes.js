import { createBrowserRouter } from "react-router-dom";
import { CreateAssistant } from "../features/assistant/createAssistant/CreateAssistant";
import GetPhone from "../features/phone/getPhone";
import UsePhone from "../features/phone/usePhone";
import PublicLayout from "../layout/PublicLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout children={<CreateAssistant />} />,
  },
  {
    path: "/phone",
    element: <PublicLayout children={<GetPhone />} />,
  },
  {
    path: "/bound",
    element: <PublicLayout children={<UsePhone />} />,
  },
  // {
  //   path: "/call",
  //   element: <PublicLayout children={<CallLogsPage />} />,
  // },
  // {
  //   path: "/voice",
  //   element: <PublicLayout children={<VoicePage />} />,
  // },
  // {
  //   path: "/profile",
  //   element: <PublicLayout children={<ProfilePage />} />,
  // },
]);
