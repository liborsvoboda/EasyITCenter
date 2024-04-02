import { TokenClassConsts, postfixTokenClass } from '../../common/constants';
import { editor } from '../../fillers/monaco-editor-core';

/**
 * Inspired by VS Code ColorTheme Default Dark+.
 */
export const darkThemeData: editor.IStandaloneThemeData = {
	base: 'vs-dark',
	inherit: true,
	rules: [
		{ token: postfixTokenClass(TokenClassConsts.BINARY), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.BINARY_ESCAPE), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.COMMENT), foreground: '6a9955' },
		{ token: postfixTokenClass(TokenClassConsts.COMMENT_QUOTE), foreground: '6a9955' },
		{ token: postfixTokenClass(TokenClassConsts.DELIMITER), foreground: 'd4d4d4' },
		{ token: postfixTokenClass(TokenClassConsts.DELIMITER_CURLY), foreground: 'da70d6' },
		{ token: postfixTokenClass(TokenClassConsts.DELIMITER_PAREN), foreground: 'ffd700' },
		{ token: postfixTokenClass(TokenClassConsts.DELIMITER_SQUARE), foreground: 'ffd700' },
		{ token: postfixTokenClass(TokenClassConsts.IDENTIFIER), foreground: '9cdcfe' },
		{ token: postfixTokenClass(TokenClassConsts.IDENTIFIER_QUOTE), foreground: '9cdcfe' },
		{ token: postfixTokenClass(TokenClassConsts.KEYWORD), foreground: '569cd6' },
		{ token: postfixTokenClass(TokenClassConsts.KEYWORD_SCOPE), foreground: 'c586c0' },
		{ token: postfixTokenClass(TokenClassConsts.NUMBER), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.NUMBER_FLOAT), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.NUMBER_BINARY), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.NUMBER_OCTAL), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.NUMBER_HEX), foreground: 'b5cea8' },
		{ token: postfixTokenClass(TokenClassConsts.OPERATOR), foreground: 'd4d4d4' },
		{ token: postfixTokenClass(TokenClassConsts.OPERATOR_KEYWORD), foreground: '569cd6' },
		{ token: postfixTokenClass(TokenClassConsts.OPERATOR_SYMBOL), foreground: 'd4d4d4' },
		{ token: postfixTokenClass(TokenClassConsts.PREDEFINED), foreground: 'dcdcaa' },
		{ token: postfixTokenClass(TokenClassConsts.STRING), foreground: 'ce9178' },
		{ token: postfixTokenClass(TokenClassConsts.STRING_ESCAPE), foreground: 'ce9178' },
		{ token: postfixTokenClass(TokenClassConsts.TYPE), foreground: '4ec9b0' },
		{ token: postfixTokenClass(TokenClassConsts.VARIABLE), foreground: '4fc1ff' }
	],
	colors: {}
};
