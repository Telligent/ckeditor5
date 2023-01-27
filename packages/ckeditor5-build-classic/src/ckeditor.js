/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import FindAndReplace from'@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';  
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

import Submittable from '@telligent/ckeditor5-evolution/src/submittable';
import TextPart from '@telligent/ckeditor5-evolution/src/textpart';
import ToolbarMenu from '@telligent/ckeditor5-evolution/src/toolbarmenu';
import TypeAhead from '@telligent/ckeditor5-evolution/src/typeahead';
import Hashtag from '@telligent/ckeditor5-evolution/src/hashtag';
import Mention from '@telligent/ckeditor5-evolution/src/mention';
import Emoticon from '@telligent/ckeditor5-evolution/src/emoticon';
import EvolutionAutoLink from '@telligent/ckeditor5-evolution/src/autolink';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Essentials,
	Bold,
	Clipboard,
	Code,
	FindAndReplace,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	FontSize,
	BlockQuote,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	Underline,

	Submittable,
	ToolbarMenu,
	TextPart,
	TypeAhead,
	Hashtag,
	Mention,
	Emoticon,
	EvolutionAutoLink
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontFamily',
			'fontColor',
			'fontSize',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'subscript',
			'superscript',
			'code',
			'specialCharacters',
			'horizontalLine',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'|',
			'findAndReplace',
			'removeFormat',
			'sourceEditing'
		],
		shouldNotGroupWhenFull: false
	},
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'
		]
	},
	fontColor: {
		colors: [
				{
						color: 'hsl(0, 0%, 0%)',
						label: 'Black'
				},
				{
						color: 'hsl(0, 0%, 30%)',
						label: 'Dim grey'
				},
				{
						color: 'hsl(0, 0%, 60%)',
						label: 'Grey'
				},
				{
						color: 'hsl(0, 0%, 90%)',
						label: 'Light grey'
				},
				{
						color: 'hsl(0, 0%, 100%)',
						label: 'White',
						hasBorder: true
				}
		]
	},
	fontBackgroundColor: {
		colors: [
				{
						color: 'hsl(0, 75%, 60%)',
						label: 'Red'
				},
				{
						color: 'hsl(30, 75%, 60%)',
						label: 'Orange'
				},
				{
						color: 'hsl(60, 75%, 60%)',
						label: 'Yellow'
				},
				{
						color: 'hsl(90, 75%, 60%)',
						label: 'Light green'
				},
				{
						color: 'hsl(120, 75%, 60%)',
						label: 'Green'
				}
		]
	},
	fontSize: {
		options: [
				'tiny',
				'default',
				'big'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};