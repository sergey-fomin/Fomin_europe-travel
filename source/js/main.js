document.querySelectorAll(".tabs-triggers__link").forEach((trigger) =>
  trigger.addEventListener("click", (evt) => {
    evt.preventDefault();
    const idTab = evt.target.getAttribute("href").replace("#", "");
    const idReview = idTab.replace("tab-", "review-");

    document
      .querySelectorAll(".tabs-triggers__link")
      .forEach((item) => item.classList.remove("tabs-triggers__link--active"));
    document
      .querySelectorAll(".tabs-content__item")
      .forEach((item) => item.classList.remove("tabs-content__item--active"));
    document
      .querySelectorAll(".reviews__item")
      .forEach((item) => item.classList.remove("reviews__item--active"));

    trigger.classList.add("tabs-triggers__link--active");
    document.getElementById(idTab).classList.add("tabs-content__item--active");
    document.getElementById(idReview).classList.add("reviews__item--active");
  })
);
