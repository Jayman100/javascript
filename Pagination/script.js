//* Get all the element needed

const itemList = document.querySelector(".item-List");
const Lists = document.querySelectorAll("li");
const paginationNumbers = document.querySelector(".pagination");
const previousPageBtn = document.querySelector(".btn--left");
const nextPageBtn = document.querySelector(".btn--right");

console.log(Lists.length);

//* Now let define the global variable

const paginationLimit = 10;
const pageCount = Math.ceil(Lists.length / paginationLimit);
let currentPage;

console.log(pageCount);

//* Now add page numbeers

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination__pages";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);

  paginationNumbers.appendChild(pageNumber);
};

const getPageNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

window.addEventListener("load", () => {
  getPageNumbers();
  setCurrentPage(1);

  previousPageBtn.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });
  nextPageBtn.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination__pages").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

//* setting the cuurent page

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActiveNumber();

  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  Lists.forEach((items, index) => {
    items.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      items.classList.remove("hidden");
    }
  });
};

const handleActiveNumber = () => {
  document.querySelectorAll(".pagination__pages").forEach((button) => {
    button.classList.remove("active");

    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex === currentPage) {
      button.classList.add("active");
    }
  });
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};
const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};
const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(previousPageBtn);
  } else {
    enableButton(previousPageBtn);
  }
  if (pageCount === currentPage) {
    disableButton(nextPageBtn);
  } else {
    enableButton(nextPageBtn);
  }
};
