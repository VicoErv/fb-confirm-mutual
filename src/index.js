function main() {
  let min = prompt("Mutual");
  let match = 0;

  let friends = document.querySelectorAll(".friendRequestItem");

  for (let friend of friends) {
    let panel = friend.querySelector(
      "a[data-hovercard-prefer-more-content-show]"
    );
    let mutual = friend.querySelector("._7ebi");
    let button = friend.querySelector("._4jy1");

    if (mutual != null) {
      let countMutual = mutual.innerText.match(/\d+/);

      if (countMutual > 0 && parseInt(countMutual[0]) > parseInt(min)) {
        button.setAttribute("style", "color: red");
        match++;
      }
    }
  }

  console.log(min);
  console.log(match);
}

let interval = setInterval(function () {
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
    main();
  }
}, 1000);
