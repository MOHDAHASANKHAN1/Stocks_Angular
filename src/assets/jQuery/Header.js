window.onload = function () {
  load();
  console.log("Reloaded...........");
};

function load() {
  $(".Profile").click(function () {
    $(".ProfileMenu").toggle();
  });
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
  console.log("Changed...........");
}
