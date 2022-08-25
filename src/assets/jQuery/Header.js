window.onload = function () {
  load();
};

function load() {
  $(".Profile").hover(
    function () {
      $(".ProfileMenu").removeClass("hidden");
    },
    function () {
      $(".ProfileMenu").addClass("hidden");
    }
  );
  $(".ViewIndex").hover(
    function () {
      $(".ViewIndexMenu").removeClass("hidden");
    },
    function () {
      $(".ViewIndexMenu").addClass("hidden");
    }
  );
  $(".ViewStocks").hover(
    function () {
      $(".ViewStocksMenu").removeClass("hidden");
    },
    function () {
      $(".ViewStocksMenu").addClass("hidden");
    }
  );
  $(".View").click(function () {
    $(".ViewMenu").toggle();
  });
}

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
  load();
}
