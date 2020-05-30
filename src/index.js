async function main() {
  let min = prompt("Minimal Mutual");
  let click = confirm("Auto click? Cancel: no");
  let match = 0;
  let delay = 0;

  if (click) delay = 5000;

  let friends = document.querySelectorAll(".friendRequestItem");

  for (let friend of friends) {
    let name = friend.querySelector(
      "a[data-hovercard-prefer-more-content-show]"
    );
    let mutual = friend.querySelector("._7ebi");
    let button = friend.querySelector("._4jy1");

    if (mutual != null) {
      let countMutual = mutual.innerText.match(/\d+/);

      if (countMutual > 0 && parseInt(countMutual[0]) > parseInt(min)) {
        await new Promise(function (resolve) {
          setTimeout(function () {
            if (click) {
              //TODO: implement this
              resolve();
            } else {
              button.scrollIntoView({
                behavior: "auto",
                block: "center",
                inline: "center",
              });

              button.setAttribute("style", "background-color: red");
              match++;

              resolve();
            }
          }, delay);
        });
      }
    }
  }

  alert(`Confirmed ${match} user`);
}

let interval = setInterval(async function () {
  let more = document.querySelector(
    ".pam.uiBoxLightblue._5cz.uiMorePagerPrimary"
  );
  console.log(more);

  if (more != null) {
    more.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });

    setTimeout(function () {
      more.click();
    }, 500);
  } else {
    clearInterval(interval);
    await main();
  }
}, 1000);
