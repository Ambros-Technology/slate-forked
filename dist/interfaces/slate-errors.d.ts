import { Location } from './location';
import { Node } from './node';
import { Path } from './path';
import { Range } from './range';
export declare type EditorError<T extends SlateErrorType = SlateErrorType> = {
    /**
     * The unique key of the operation and the specific error.
     * The key format: `<methodName>.<case>`
     */
    key: string;
    /**
     * Contextual error description.
     */
    message: string;
    /**
     * Underlying generic error.
     */
    error?: SlateError<T>;
    /**
     * Additional data related to the operation that caused the error for custom handling.
     */
    data?: unknown;
    /**
     * Experimental recovery value instead of throwing an error.
     * Used as returned value only if `editor.strict = false`.
     */
    recovery?: unknown;
};
export declare type SlateError<T extends SlateErrorType = SlateErrorType> = {
    /**
     * Error type.
     */
    type: T;
    /**
     * Error description.
     */
    message: string;
};
export declare const SlateErrors: {
    EditorNext: () => {
        type: "EditorNext";
        message: string;
    };
    EditorPoint: (edge: string, at: Location) => {
        type: "EditorPoint";
        message: string;
    };
    EditorPrevious: () => {
        type: "EditorPrevious";
        message: string;
    };
    NodeAncestor: (node: Node, path: Path) => {
        type: "NodeAncestor";
        message: string;
    };
    NodeChildText: (root: Node) => {
        type: "NodeChildText";
        message: string;
    };
    NodeChildIndex: (root: Node, index: number) => {
        type: "NodeChildIndex";
        message: string;
    };
    NodeDescendant: (node: Node, path: Path) => {
        type: "NodeDescendant";
        message: string;
    };
    NodeFragment: (root: Node) => {
        type: "NodeFragment";
        message: string;
    };
    NodeGet: (root: Node, path: Path) => {
        type: "NodeGet";
        message: string;
    };
    NodeLeaf: (node: Node, path: Path) => {
        type: "NodeLeaf";
        message: string;
    };
    NodeParent: (path: Path) => {
        type: "NodeParent";
        message: string;
    };
    PathNext: (path: Path) => {
        type: "PathNext";
        message: string;
    };
    PathParent: (path: Path) => {
        type: "PathParent";
        message: string;
    };
    PathPrevious: (path: Path) => {
        type: "PathPrevious";
        message: string;
    };
    PathPreviousChild: (path: Path) => {
        type: "PathPreviousChild";
        message: string;
    };
    PathRelative: (path: Path, ancestor: Path) => {
        type: "PathRelative";
        message: string;
    };
    TransformsSelect: (target: Range) => {
        type: "TransformsSelect";
        message: string;
    };
};
export declare type SlateErrorType = keyof typeof SlateErrors;
//# sourceMappingURL=slate-errors.d.ts.map