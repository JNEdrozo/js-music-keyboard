// /* eslint-disable */
$(document).ready(() => {
  function cNote() {
    const soundC = document.getElementById('cAudio');
    soundC.load();
    soundC.play();
  }

  function dNote() {
    const soundD = document.getElementById('dAudio');
    soundD.load();
    soundD.play();
  }

  function eNote() {
    const soundE = document.getElementById('eAudio');
    soundE.load();
    soundE.play();
  }

  function fNote() {
    const soundF = document.getElementById('fAudio');
    soundF.load();
    soundF.play();
  }

  function gNote() {
    const soundG = document.getElementById('gAudio');
    soundG.load();
    soundG.play();
  }

  function aNote() {
    const soundA = document.getElementById('aAudio');
    soundA.load();
    soundA.play();
  }

  function bNote() {
    const soundB = document.getElementById('bAudio');
    soundB.load();
    soundB.play();
  }
  // let variable = '.note.c'
  // $(variable).click(function() {
  //   cNote();
  // });

  $('.note.d').click(() => {
    dNote();
  });

  $('.note.e').click(function() {
    eNote();
  });

  $('.note.f').click(function() {
    fNote();
  });

  $('.note.g').click(function() {
    gNote();
  });

  $('.note.a').click(function() {
    aNote();
  });

  $('.note.b').click(function() {
    bNote();
  });

  // $(window).click(function(event) {
  //   switch(variable) {
  //     case '.note.c':
  //     $(variable).click(function() {
  //       cNote();
  //     });
  //   }
  // });

  $(window).keydown(function(event) {
    if (event.keyCode === 67) {
      cNote();
    } else if (event.keyCode === 68) {
      dNote();
    } else if (event.keyCode === 69) {
      eNote();
    } else if (event.keyCode === 70) {
      fNote();
    } else if (event.keyCode === 71) {
      gNote();
    } else if (event.keyCode === 65) {
      aNote();
    } else if (event.keyCode === 66) {
      bNote();
    }
  });
});
