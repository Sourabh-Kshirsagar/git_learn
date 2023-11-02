import render from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import { staticRouter } from "react-router-dom/server";
import store from "../utils/store";

test("logo should load on rendering the header", () => {
  const header = render(
    <staticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </staticRouter>
  );
  console.log(header);
});
