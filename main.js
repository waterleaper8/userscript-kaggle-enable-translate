// ==UserScript==
// @name         Kaggle翻訳有効化
// @namespace    https://next.waterleaper.net/
// @version      0.1
// @description  KaggleのLearnでGoogle翻訳をできるようにします。 Tutorialで「Ctrl+Shift+.」→「Ctrl+Shift+/」を順に押してください。
// @author       waterleaper
// @match        https://www.kaggle.com/*
// @match        https://www.kaggleusercontent.com/*
// @icon         https://www.kaggle.com/static/images/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==

;(function () {
  "use strict"
  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
      if (event.shiftKey) {
        if (event.code === "Period") {
          const url = document
            .getElementById("rendered-kernel-content")
            .getAttribute("src")
          window.location.href = url
        }
      }
    }
  })

  window.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
      if (event.shiftKey) {
        if (event.code === "Slash") {
          // スクロールの無効化解除
          document.querySelector("body").style.overflowY = "visible"

          // コードセルのclassに.notranslateを追加
          document.querySelectorAll(".input").forEach((element) => {
            element.classList.add("notranslate")
          })

          // コードの出力セルのclassに.notranslateを追加
          document.querySelectorAll(".output_wrapper").forEach((element) => {
            element.classList.add("notranslate")
          })
        }
      }
    }
  })
})()
