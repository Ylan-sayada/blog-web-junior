/// <reference types="react-scripts" />

declare module 'draft-js-export-markdown' {
    import draftjs = require('draft-js');

    export function stateToMarkdown(content: draftjs.ContentState): string;
}