﻿// Copyright (c) 2014 AlphaSierraPapa for the SharpDevelop Team
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
// to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Media;

using AvalonEditB.Document;
using AvalonEditB.Rendering;
using AvalonEditB.Utils;

namespace AvalonEditB.Folding
{
	/// <summary>
	/// A section that can be folded.
	/// </summary>
	public sealed class FoldingSection : TextSegment
	{
		readonly FoldingManager manager;
		bool isFolded;
		internal CollapsedLineSection[] collapsedSections;
		string title;

		SolidColorBrush backgroundColor = null;//added by Goswin, used for selection highlighting
		
		/// <summary>
		/// Get or Set the background color for the box in collapsed state
		/// Call TextView.Redraw() if not showing.
		/// </summary>
		[Obsolete("Has a typo, use BackgroundColor instead")]
		public SolidColorBrush BackbgroundColor {
			get { return backgroundColor; }
			set { backgroundColor = value; }
		}

		/// <summary>
		/// Get or Set the background color for the box in collapsed state
		/// Call TextView.Redraw() if not showing.
		/// </summary>
		public SolidColorBrush BackgroundColor {
			get { return backgroundColor; }
			set { backgroundColor = value; }
		}
		
		
		Action<Rect,DrawingContext> decorateRectangle = null; //added by Goswin, used for Error highlighting
		/// <summary>
		/// Get or Set an additional drawing action on the collapsed rectangle.
		/// </summary>
		public Action<Rect,DrawingContext> DecorateRectangle {
			get { return decorateRectangle; }
			set { decorateRectangle = value; }
		}


		/// <summary>
		/// Gets/sets if the section is folded.
		/// </summary>
		public bool IsFolded {
			get { return isFolded; }
			set {
				if (isFolded != value) {
					isFolded = value;
					ValidateCollapsedLineSections(); // create/destroy CollapsedLineSection
					manager.Redraw(this);
				}
			}
		}

		/// <summary>
		/// Needed locally if manager.AutoRedrawFoldingSections is false.
		/// </summary>
		public void ValidateCollapsedLineSections() // made public by Goswin, needs to run if a collapsed folding section changes  and manager.AutoRedrawFoldingSections is false
		{
			if (!isFolded) {
				RemoveCollapsedLineSection();
				return;
			}
			// It is possible that StartOffset/EndOffset get set to invalid values via the property setters in TextSegment,
			// so we coerce those values into the valid range.
			DocumentLine startLine = manager.document.GetLineByOffset(StartOffset.CoerceValue(0, manager.document.TextLength));
			DocumentLine endLine = manager.document.GetLineByOffset(EndOffset.CoerceValue(0, manager.document.TextLength));
			if (startLine == endLine) {
				RemoveCollapsedLineSection();
			} else {
				if (collapsedSections == null)
					collapsedSections = new CollapsedLineSection[manager.textViews.Count];
				// Validate collapsed line sections
				DocumentLine startLinePlusOne = startLine.NextLine;
				for (int i = 0; i < collapsedSections.Length; i++) {
					var collapsedSection = collapsedSections[i];
					if (collapsedSection == null || collapsedSection.Start != startLinePlusOne || collapsedSection.End != endLine) {
						// recreate this collapsed section
						if (collapsedSection != null) {
							Debug.WriteLine("CollapsedLineSection validation - recreate collapsed section from " + startLinePlusOne + " to " + endLine);
							collapsedSection.Uncollapse();
						}
						collapsedSections[i] = manager.textViews[i].CollapseLines(startLinePlusOne, endLine);
					}
				}
			}
		}

		/// <inheritdoc/>
		protected override void OnSegmentChanged()		{
			base.OnSegmentChanged();
			if (manager.AutoRedrawFoldingSections) { // Added by Goswin to do less Redraw() . This causes the entire folding section to redraw for a single character change, It seems not needed! It s only needed if the folding section changes.
				ValidateCollapsedLineSections(); // because It is possible that StartOffset/EndOffset get set to invalid values via the property setters in TextSegment,
				// don't redraw if the FoldingSection wasn't added to the FoldingManager's collection yet
				if (IsConnectedToCollection ) {
					manager.Redraw(this); }
			}
		}

		/// <summary>
		/// Gets/Sets the text used to display the collapsed version of the folding section.
		/// by default this is three dots: ' ... '
		/// </summary>
		public string Title {
			get {
				return title;
			}
			set {
				if (title != value) {
					title = value;
					if (this.IsFolded)
						manager.Redraw(this);
				}
			}
		}

		/// <summary>
		/// Gets the content of the collapsed lines as text.
		/// </summary>
		public string TextContent {
			get {
				return manager.document.GetText(StartOffset, EndOffset - StartOffset);
			}
		}

		/// <summary>
		/// Gets/Sets an additional object associated with this folding section.
		/// </summary>
		public object Tag { get; set; }

		internal FoldingSection(FoldingManager manager, int startOffset, int endOffset)
		{
			Debug.Assert(manager != null);
			this.manager = manager;
			this.StartOffset = startOffset;
			this.Length = endOffset - startOffset;
		}

		void RemoveCollapsedLineSection()
		{
			if (collapsedSections != null) {
				foreach (var collapsedSection in collapsedSections) {
					if (collapsedSection != null && collapsedSection.Start != null)
						collapsedSection.Uncollapse();
				}
				collapsedSections = null;
			}
		}
	}
}
