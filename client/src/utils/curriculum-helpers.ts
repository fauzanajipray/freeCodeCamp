import { parse } from '@babel/parser';
import generate from '@babel/generator';
import CSSHelp from './css-help';

const removeHtmlComments = (str: string): string =>
  str.replace(/<!--[\s\S]*?(-->|$)/g, '');

const removeCssComments = (str: string): string =>
  str.replace(/\/\*[\s\S]+?\*\//g, '');

export const removeJSComments = (codeStr: string): string => {
  // Note: removes trailing new lines and tailing spaces at end of lines
  const options = {
    comments: false,
    retainLines: true,
    compact: false,
    concise: false,
    minified: false
  };
  try {
    const ast = parse(codeStr);
    // TODO: Sort out type error on ast
    const { code } = generate(ast, options, codeStr);
    return code;
  } catch (err) {
    return codeStr;
  }
};

const removeWhiteSpace = (str = ''): string => {
  return str.replace(/\s/g, '');
};

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace,
  CSSHelp
};

export default curriculumHelpers;
