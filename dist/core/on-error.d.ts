import { Editor } from '../interfaces';
import { EditorError } from '../interfaces/slate-errors';
export declare const onError: <T extends "EditorNext" | "EditorPoint" | "EditorPrevious" | "NodeAncestor" | "NodeChildText" | "NodeChildIndex" | "NodeDescendant" | "NodeFragment" | "NodeGet" | "NodeLeaf" | "NodeParent" | "PathNext" | "PathParent" | "PathPrevious" | "PathPreviousChild" | "PathRelative" | "TransformsSelect">(editor: Editor, context: EditorError) => any;
//# sourceMappingURL=on-error.d.ts.map