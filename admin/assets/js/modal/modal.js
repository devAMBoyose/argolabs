document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("purchaseBtn");
  const modal = document.getElementById("purchaseModal");
  const closeBtn = document.getElementById("closePurchaseModal");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
