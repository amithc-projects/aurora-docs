---
title: "Code Syntax Highlighter"
description: "Dark-themed blocks for displaying raw code snippets with one-click copy functionality."
category: "Typography"
menu:
  main:
    parent: "typography"
---

The Aurora `.code-block` component empowers you to display terminal outputs and richly formatted syntax snippets without relying on incredibly heavy external parsing libraries like Prism.js.

## Basic Layout
A clean, dark interface that features a language label and a functional `Copy` button.

{{< demo >}}
<div class="code-block" style="max-width: 600px;">
  <div class="code-block__header">
    <span class="code-block__lang">BASH</span>
    <button class="code-block__copy" title="Copy code">
      <span class="material-symbols-outlined" style="font-size: 14px;">content_copy</span> Copy
    </button>
  </div>
  <pre class="code-block__content">npm install @aurora-design/core
npm run start:dev</pre>
</div>
{{< /demo >}}

## Zero-Dependency Tokenization
Most frameworks require loading a 200kb javascript parser to colorize text. 

Aurora provides tiny native modifier classes (like `.token-keyword` and `.token-string`) so you can manually span out perfectly colored code snippets inside your `pre` tags with absolutely zero JavaScript overhead.

{{< demo >}}
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">JAVASCRIPT</span>
    <button class="code-block__copy" title="Copy code">
      <span class="material-symbols-outlined" style="font-size: 14px;">content_copy</span> Copy
    </button>
  </div>
  <pre class="code-block__content"><span class="token-keyword">async function</span> <span class="token-function">fetchUserData</span>(userId) {
  <span class="token-keyword">try</span> {
    <span class="token-keyword">const</span> response <span class="token-operator">=</span> <span class="token-keyword">await</span> fetch(<span class="token-string">\`/api/v1/users/\${userId}\`</span>);
    <span class="token-keyword">const</span> data <span class="token-operator">=</span> <span class="token-keyword">await</span> response.<span class="token-function">json</span>();
    
    <span class="token-comment">// Process the resulting user document</span>
    <span class="token-keyword">return</span> data;
  } <span class="token-keyword">catch</span> (error) {
    console.<span class="token-function">error</span>(<span class="token-string">"Failed to load user"</span>, error);
  }
}</pre>
</div>
{{< /demo >}}
