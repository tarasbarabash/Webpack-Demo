(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=c[r.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var a=[];o<r.parts.length;o++)a.push(u(r.parts[o],t));c[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var i=f(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function u(e,t){var n,r,i;if(t.singleton){var u=h++;n=p||(p=o(t)),r=a.bind(null,n,u,!1),i=a.bind(null,n,u,!0)}else n=o(t),r=s.bind(null,n,t),i=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}var c={},l=function(){var e;return function(){return void 0===e&&(e=!(!(window&&document&&document.all)||window.atob)),e}}(),f=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}(),p=null,h=0;e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=l());var n=r(e,t);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=c[s.id];u&&(u.refs--,o.push(u))}e&&i(r(e,t),t);for(var l,f=0;f<o.length;f++)if(0===(l=o[f]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}}}]);