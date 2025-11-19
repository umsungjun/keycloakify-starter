import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";
import "./index.css";

// 다음 블록을 주석 해제하면 `yarn dev`로 특정 페이지를 테스트할 수 있습니다
// 번들 크기 증가를 방지하려면 테스트 후 다시 주석 처리하는 것을 잊지 마세요

// import { getKcContextMock } from "./login/KcPageStory";

// if (import.meta.env.DEV) {
//     window.kcContext = getKcContextMock({
//         pageId: "login.ftl",
//         overrides: {}
//     });
// }

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <KcPage kcContext={window.kcContext} />
        )}
    </StrictMode>
);
