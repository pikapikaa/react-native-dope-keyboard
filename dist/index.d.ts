import * as react_jsx_runtime from 'react/jsx-runtime';

type KeyboardState = {
    visible: boolean;
    height: number;
    duration?: number;
};
declare function useKeyboard(): KeyboardState;

declare function KeyboardSpacer(): react_jsx_runtime.JSX.Element;

export { KeyboardSpacer, useKeyboard };
