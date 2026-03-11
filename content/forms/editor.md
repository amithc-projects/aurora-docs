---
title: "Rich Text Editor"
description: "A lightweight, dependency-free WYSIWYG editor."
category: "Forms"
menu:
  main:
    parent: "forms-standard"
---

The `Rich Text Editor` provides an interactive prose-writing experience built entirely on native HTML5 `contenteditable` APIs. 

Zero dependencies. Zero bloat. Perfect for CMS dashboards and knowledge-base articles.

## Basic Editor

{{< demo >}}
<div class="editor-wrapper">
  <!-- The Toolbar -->
  <div class="editor-toolbar">
    
    <!-- Text Styles -->
    <button class="editor-btn" data-command="bold" title="Bold (Cmd+B)">
      <span class="material-symbols-outlined">format_bold</span>
    </button>
    <button class="editor-btn" data-command="italic" title="Italic (Cmd+I)">
      <span class="material-symbols-outlined">format_italic</span>
    </button>
    <button class="editor-btn" data-command="underline" title="Underline (Cmd+U)">
      <span class="material-symbols-outlined">format_underlined</span>
    </button>
    
    <div class="editor-divider"></div>
    
    <!-- Heading Select -->
    <select class="editor-select" data-command="formatBlock">
      <option value="P">Paragraph</option>
      <option value="H1">Heading 1</option>
      <option value="H2">Heading 2</option>
      <option value="H3">Heading 3</option>
      <option value="BLOCKQUOTE">Quote</option>
    </select>
    
    <div class="editor-divider"></div>
    
    <!-- Lists -->
    <button class="editor-btn" data-command="insertUnorderedList" title="Bulleted List">
      <span class="material-symbols-outlined">format_list_bulleted</span>
    </button>
    <button class="editor-btn" data-command="insertOrderedList" title="Numbered List">
      <span class="material-symbols-outlined">format_list_numbered</span>
    </button>
    
    <div class="editor-divider"></div>
    
    <!-- Links -->
    <button class="editor-btn" data-command="createLink" title="Insert Link">
      <span class="material-symbols-outlined">link</span>
    </button>
    
    <!-- Erase -->
    <button class="editor-btn" data-command="removeFormat" title="Clear Formatting" style="margin-left:auto;">
      <span class="material-symbols-outlined">format_clear</span>
    </button>
  </div>
  
  <!-- The Editable Area -->
  <div class="editor-content" contenteditable="true" placeholder="Start typing your amazing article here..."></div>
</div>
{{< /demo >}}
